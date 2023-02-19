import Head from 'next/head'
import React, { Fragment } from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/post-util'

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta name='description' content='programming-related tutorials' />
      </Head>
  <AllPosts posts={props.posts} />
  </Fragment>
  )
}

export default AllPostsPage
export function getStaticProps(){
  const allPosts = getAllPosts()
  return {
    props : {
      posts:allPosts
    }
  }
}