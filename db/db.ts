import mongoose from "mongoose";
import Post from "../model/Post";
import User from "../model/User";
export default async function db() {

    try {
        await mongoose.connect(process.env.DB_URL as string);
        // console.log("Database connected successfully ")
        await Post.find()
        await User.find()
    } catch (error: any) {
       console.log("error", error)
    }


}
