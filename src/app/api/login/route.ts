import { NextRequest, NextResponse } from "next/server";
import User from "../../../../model/User";
import jwtoken from "../../../../utils/jwtoken";

export async function POST(NextRequest: NextRequest) {

    const req = await NextRequest.json()
    const user = await User.findOne({ username: req.username })

    if (user) {
        if (user.password == req.password) {
            const token = await jwtoken(user)
            return NextResponse.json({ user, success: true, token })
        }
    }

    return NextResponse.json({ success: false })


}
