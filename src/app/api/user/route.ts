import { NextRequest, NextResponse } from "next/server";
import User from "../../../../model/User";
import db from "../../../../db/db";
import errorHandler from "../../../../utils/errorHandler";
import jwtoken from "../../../../utils/jwtoken";
db()

export async function POST(NextRequest: NextRequest) {
    try {




        const data = await NextRequest.json()

        const user = await User.findOne({ username: data.username })

        if (user) {
            return NextResponse.json({ error: "Username Already Exist", success: false })
        }

        const newuser = new User({ username: data.username, password: data.password });
        const success = await newuser.save()
        const token = await jwtoken(success)

        return NextResponse.json({ user: success, success: true, token })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }

}


export async function GET(NextRequest: NextRequest) {

    try {
        const users = await User.find();
        console.log("users", users)
        return NextResponse.json({ users, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}





