import mongoose from "mongoose"

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String
    },
    img:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},{timestamps:true})

const postShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    img: {
        type:String
    },
    userId:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

// if not exists || creating new one
export const User = mongoose.models.User || mongoose.model("User",userShema);
export const Post = mongoose.models.Post || mongoose.model("Post",postShema);