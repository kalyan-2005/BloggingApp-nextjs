"use server"
import { signOut,signIn } from "./auth";
import  { Post, User } from "./modals";
import { connectDb } from "./utils";
import bcrypt from 'bcryptjs'

export const serverAction = async (post) => {
    try {
        connectDb();
        const {title,desc,slug,userId} = Object.fromEntries(post);
        const newPost = new Post({title,desc,slug,userId});
        await newPost.save();
    } catch(err) {
        console.log(err);
        return {error:"something went wront while creating new post!"}
    }
}
// Logout
export const handleLogout = async () => {
    "use server"
    await signOut();
}
// register
export const register= async (previousState,newUser)=> {
    const {username,email,password,passwordRepeat} = Object.fromEntries(newUser);
    console.log(username,email,password,passwordRepeat)
    if(password !== passwordRepeat) {
        return {error:"Password does not match!"};
    }
    try {
        connectDb();
        const user = await User.findOne({username});
        console.log("*****",user);
        if(user) {
            console.log("user already exist")
            return {error:"Username already exists!"}
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })
        await newUser.save()
        console.log("saved to db!")
        return {success:true}
    } catch(err) {
        console.log("something went wront",err);
        return {error:"something went wrong!"}
    }
}

// handling login
export const handleLogin = async (prevState,user) => {
    console.log(user)
    const {username,password} = Object.fromEntries(user);
    try {
        await signIn("credentials",{username,password});
    } catch(err) {
        console.log("MYERROR************",err.message);
        if(err.message.includes("credentialssignin")) {
            return {error:"Invalid username or password"}
        }
        throw err; 
    }
}