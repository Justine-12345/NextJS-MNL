import { NextResponse, NextRequest } from "next/server";
import errorHandler from "./errorHandler";
const jwt = require('jsonwebtoken')

export default async function jwtokenVerify(NextRequest: NextRequest) {


    const token: string = NextRequest.headers.get('token') as string
    var decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    return decoded




}

