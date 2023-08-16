import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../model/User";
import jwtokenVerify from "../../../../../utils/jwtoken-verify";
import errorHandler from "../../../../../utils/errorHandler";
import db from "../../../../../db/db";

type Props = { params: { id: string } }



export async function PATCH(NextRequest: NextRequest, { params }: Props) {
    try {
        await jwtokenVerify(NextRequest)
        const data = await NextRequest.json()
        const user = await User.findByIdAndUpdate(params.id, { username: data.username, password: data.password }, { new: true })

        return NextResponse.json({ user, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }



}

export async function GET(NextRequest: NextRequest, { params }: Props) {

    try {
        const user = await User.findById(params.id)
        console.log("user", user)
        return NextResponse.json({ user, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}


export async function DELETE(NextRequest: NextRequest, { params }: Props) {

    try {
        const user = await User.findByIdAndDelete(params.id)
        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}