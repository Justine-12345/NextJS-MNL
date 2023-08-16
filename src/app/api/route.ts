import db from "../../../db/db"
import jwtoken from '../../../utils/jwtoken'
import jwtokenVerify from '../../../utils/jwtoken-verify'
import { NextResponse } from "next/server"
db()
export async function GET() {

    // try {
    //     const token = await jwtokenVerify()
    //     console.log("token: ", token)
    //     return NextResponse.json({ Great: token })
    // } catch (error: { message: string }) {
    //     return NextResponse.json({ Error: error?.message })
    // }

}
