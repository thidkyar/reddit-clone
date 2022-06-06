import { gql } from '@apollo/client'

export const GET_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`

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

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
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

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
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

