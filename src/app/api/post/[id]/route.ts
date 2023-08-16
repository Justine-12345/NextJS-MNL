import React from 'react'
import { NextRequest, NextResponse } from 'next/server'
import errorHandler from '../../../../../utils/errorHandler'
import Post from '../../../../../model/Post'

type Props = { params: { id: string } }

export async function GET(NextRequest: NextRequest, { params }: Props) {
    try {
        const post = await Post.findById(params.id)
        return NextResponse.json({ post: post, success: true })
    } catch (error) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }
}

export async function PATCH(NextRequest: NextRequest, { params }: Props) {
    try {
        const data = await NextRequest.json()
        const post = await Post.findByIdAndUpdate(params.id, { caption: data.caption, image: data.image }, { new: true })
        return NextResponse.json({ post: post, success: true })
    } catch (error) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }
}


export async function DELETE(NextRequest: NextRequest, { params }: Props) {
    try {
        const post = await Post.findByIdAndDelete(params.id)
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: await errorHandler(error), success: false })
    }
}