import { NextResponse } from "next/server";

export default async function errorHandler(error: any) {

    if (error.name === 'ValidationError') {
        const firstErrorMessage = Object.values(error.errors as { [key: string]: any })[0].message;
        return firstErrorMessage
    }

    if (error.name === 'JsonWebTokenError') {
        return "Please Login to Continue"
    }

    const errorMessage = error.message
    return errorMessage
}
