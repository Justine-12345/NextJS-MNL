import { NextRequest, NextResponse } from "next/server"
import jwtokenVerify from "../../../../../utils/jwtoken-verify"
import errorHandler from "../../../../../utils/errorHandler"
import jwtoken from "../../../../../utils/jwtoken"
import Post from "../../../../../model/Post"

export async function GET(NextRequest: NextRequest) {

    try {
        const { user } = await jwtokenVerify(NextRequest)

        const posts = await Post.find({"userId": user._id}).populate('userId', 'username').sort({ "createdAt": -1 })

        return NextResponse.json({ posts, success: true })

    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}

