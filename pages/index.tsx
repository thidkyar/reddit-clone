import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostBox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>iReddit</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* POSTBOX */}
      <PostBox />
      <div className="">
        {/* feed */}
        <Feed />
      </div>
    </div>
  )
}

export default Home
