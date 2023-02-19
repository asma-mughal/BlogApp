import React from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/post-util'
import Head from 'next/head'
const PostDetailPage = (props) => {
  return (
    <div>
        <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
        <PostContent post={props.post} />
    </div>
  )
}

export default PostDetailPage

export function getStaticProps(context){
const {params} = context;
const { slug} = params;
const postData = getPostData(slug)

  return {
    props:{
     post : postData
    },
    revalidate: 600,
  }
}

export function getStaticPaths(context){
   const postsFileName =  getPostsFiles()
   const slugs = postsFileName.map((filename)=> filename.replace(/\.md$/,''))
  
  return {
    paths:slugs.map((slug)=>({
      params : {slug : slug}
    })),
    fallback:false
  }
}