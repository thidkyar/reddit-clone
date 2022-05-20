import type { NextPage } from 'next'
import Head from 'next/head'
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
      <div>
        {/* feed */}
      </div>
    </div>
  )
}

export default Home
