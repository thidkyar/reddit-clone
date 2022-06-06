import { useMutation, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import TimeAgo from 'react-timeago'
import Avatar from '../../../../components/Avatar'
import Post from '../../../../components/Post'
import { ADD_COMMENT } from '../../../../graphql/mutations'
import { GET_POST_BY_POST_ID } from '../../../../graphql/queries'

type FormData = {
  comment: string
}

function PostPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, 'getPostListByPostId'],
  })
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: router.query.postid },
  })

  const post: Post = data?.getPostListByPostId[0]
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    //POST COMMENT HERE

    const notification = toast.loading('Posting your comment...')

    await addComment({
      variables: {
        post_id: router.query.postid,
        username: session?.user?.name,
        comment: data.comment,
      },
    })

    setValue('comment', '')
    toast.success('Comment succesfully posted!', { id: notification })
  }
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />

      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <textarea
            {...register('comment')}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? 'What are your thoughts?' : 'Please sign in to comment'
            }
          />

          <button
          disabled={!session}
            type="submit"
            className="rounded-xl bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
      <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />

        {post?.comments?.map((comment: any) => (
          <div
            key={comment?.id}
            className="relative flex items-center space-x-2 space-y-5"
          >
            <hr className="absolute top-10 h-16 border left-7 z-0"/>
            <div className="z-50">
              <Avatar seed={comment?.username} />
            </div>

            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-600">
                  {comment.username}
                </span>
                • <TimeAgo date={comment.created_at} />
              </p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostPage
