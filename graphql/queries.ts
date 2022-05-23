import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      id
      body
      created_at
      image
      subreddit_id
      title
      username
      subreddits {
        created_at
        id
        topic
      }
      comments {
        id
        comment
        username
        post_id
        created_at
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
