// const users = [
//     {
//         id:1,
//         title:"p-1",
//         body:"oidsnfpsdn",
//         userId:1
//     },
//     {
//         id:2,
//         title:"p-2",
//         body:"oidsnfpsdn",
//         userId:1
//     },
//     {
//         id:3,
//         title:"p-3",
//         body:"oidsnfpsdn",
//         userId:12
//     }
// ]

import { Post, User } from "./modals"
import { connectDb } from "./utils";

export const getPosts = async()=>{
    try {
        connectDb();
        const posts = await Post.find();
        return posts;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch posts!")
    }
}
export const getPost = async(slug)=>{
    try {
        connectDb();
        const post = await Post.findOne({slug:slug});
        return post;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch post!")
    }
}

export const getUsers = async()=>{
    try {
        connectDb();
        const users = await User.find();
        return users;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}
export const getUser = async(id)=>{
    try {
        connectDb();
        const user = await User.findOne({_id:id});
        return user;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch user!")
    }
}