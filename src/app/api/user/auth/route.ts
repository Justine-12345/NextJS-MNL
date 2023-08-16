import { NextRequest, NextResponse } from "next/server"
import jwtokenVerify from "../../../../../utils/jwtoken-verify"
import errorHandler from "../../../../../utils/errorHandler"
import jwtoken from "../../../../../utils/jwtoken"


export async function GET(NextRequest: NextRequest) {

    try {
        const { user } = await jwtokenVerify(NextRequest)
        
        return NextResponse.json({ user, success: true })
    } catch (error: any) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }


}

