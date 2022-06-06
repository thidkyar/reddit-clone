import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostBox from '../components/Postbox'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'
import { useMutation, useQuery } from '@apollo/client'
import SubredditRow from '../components/SubredditRow'

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  })

  const subreddits: Subreddit[] = data?.getSubredditListLimit

  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>iReddit</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* POSTBOX */}
      <PostBox />
      <div className="flex">
        {/* feed */}
        <Feed />

        <div className="sticky top-36 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>

          <div>
            {/* list subreddits */}
            {subreddits?.map((subreddit, index) => (
              <SubredditRow
                key={subreddit?.id}
                topic={subreddit.topic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
