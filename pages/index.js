import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/Hero'
import { getAllPosts, getFeaturedPosts } from '../lib/post-util'
import styles from '../styles/Home.module.css'
export default function Home(props) {
  return (
    <div className={styles.container}>
<Fragment>
  <Head>
    <title>Welcome to my Blog</title>
    <meta name="description" content='Web Development' />
  </Head>
  <Hero />
  <FeaturedPosts posts={props.posts} />
</Fragment>
    </div>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}