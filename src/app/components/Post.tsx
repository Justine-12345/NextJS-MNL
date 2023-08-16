'use client'
import React, { Suspense } from 'react';

type Props = {
  post: Post
}



const PostCard = ({ post }: Props) => {
  return (
    <div key={post?._id} className="bg-gray-900 text-white shadow-md rounded-md p-4 mb-4">
      <div className="flex items-start mb-4">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://via.placeholder.com/40"
          alt="User Profile"
        />
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold">{post?.userId?.username}</h4>
          <p className="text-gray-500 text-sm">{post?.createdAt}</p>
        </div>
      </div>
        {post?.image && (
          <div className="mb-4 bg-[#374151] ">
            <img className="w-full max-w-[50vw] min-w-[50vw] max-h-[60vh] object-contain object-center rounded-md" src={post?.image} alt="Post Image" />
          </div>
        )}

      <p className="w-full max-w-[50vw] min-w-[50vw] max-h-[60vh] text-lg mb-4">{post?.caption}</p>
    </div>
  );
};

export default PostCard;
