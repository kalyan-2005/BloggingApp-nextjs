import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectDb } from "./utils"
import { User } from "./modals"
import bcrypt from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from "./auth.config"

const login = async(credentials)=>{
    try {
        connectDb();
        const user = await User.findOne({username:credentials.username})
        if(!user) {
            throw new Error("Wrong username")
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
        if(!isPasswordCorrect) {
            throw new Error("Wrong password")
        }
        return user;
    } catch(err) {
        throw new Error("Login failed!")
    }
}
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    // for middleware
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user;
                } catch(err) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({user,account,profile}) {
            console.log(user,account,profile)
            if(account.provider === "github") {
                console.log(user,account,profile)
                connectDb();
                try {
                    const user = await User.findOne({email:profile.email})
                    if(!user) {
                        const newUser = new User({
                            username : profile.login,
                            email : profile.email,
                            img : profile.avatar_url
                        })
                        await newUser.save();
                        console.log("user added!")
                    }
                } catch(err) {
                    console.log(err)
                    return false;
                }
            }
            return true;
        },
        // for middleware
        ...authConfig.callbacks
    },
})