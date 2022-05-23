import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/outline'
import React from 'react'
import Avatar from './Avatar'
import Timeago from 'react-timeago'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  post: Post
}
function Post({ post }: Props) {
  return (
    <Link href={`/r/${post.subreddits[0]?.topic}/post/${post.id}`}>
      <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-400">
        {/* Votes section */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon className="voteButton hover: text-red-400" />
          <p className="text-xs font-bold text-black">1</p>
          <ArrowDownIcon className="voteButton hover:text-blue-400" />
        </div>
        {/* 2nd column */}
        <div className="p-3 pb-1">
          {/* header */}
          <div className="flex items-center space-x-2">
            <Avatar seed={post.subreddits[0]?.topic} />
            <p className="text-xs text-gray-400">
              <Link href={`r/${post.subreddits[0]?.topic}`}>
                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                  r/{post.subreddits[0]?.topic}
                </span>
              </Link>
              {' '}• Posted by u/
              {post.username} <Timeago date={post.created_at} />
            </p>
          </div>
          {/* body */}
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
          </div>
          {/* image */}
          <img src={post?.image} className="w-full" />
          {/* footer */}
          <div className="flex space-x-4 text-gray-400">
            <div className="postButton">
              <ChatAltIcon className="h-6 w-6" />
              <p className="">{post.comments.length} Comments</p>
            </div>
            <div className="postButton">
              <GiftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postButton">
              <ShareIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postButton">
              <BookmarkIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postButton">
              <DotsHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Post
