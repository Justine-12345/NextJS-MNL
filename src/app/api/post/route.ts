import { NextRequest, NextResponse } from "next/server";
import db from "../../../../db/db";
import Post from "../../../../model/Post";
import User from "../../../../model/User";
import errorHandler from "../../../../utils/errorHandler";
import jwtokenVerify from "../../../../utils/jwtoken-verify";
import mongoose from "mongoose";
db()

export async function POST(NextRequest: NextRequest) {
    try {
        const { user } = await jwtokenVerify(NextRequest)
        const data = await NextRequest.json()
        const newPost = new Post({ caption: data.caption, userId: user._id, image: data.image });
        const success = await newPost.save()
        return NextResponse.json({ post: success, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }

}

export async function GET(NextRequest: NextRequest) {

    try {
        const posts = await Post.find({}).populate('userId', 'username').sort({ "createdAt": -1 })
        return NextResponse.json({ posts: posts, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}