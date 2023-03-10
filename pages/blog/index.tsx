import React from 'react';
import Link from 'next/link';
import { getAllPublished } from '@/lib/notion';
import { GridLayout } from '@/lib/layouts';
import { MainHeading } from '@/lib/typography';
import styled from 'styled-components';
import Post from '@/components/Post';
import Head from 'next/head';

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? ''

type Posts = {
  id: any;
  title: any;
  tags: any;
  description: any;
  createdAt: string;
  slug: any;
  thumbnail: string;
}[]

type Post = {
  id: string;
  title: string;
  tags: any;
  description: string;
  createdAt: string;
  slug: string;
  thumbnail: string;
}


const Blog = ({posts}: {posts: Posts}) => {
    return (
      <>
        <Head>
          <title>Blog</title>
        </Head>
        <BlogBody>
          <MainHeading>Blog</MainHeading>
          <GridLayout>
                {
                  posts.map((post: Post) => {
                      return (
                      <Link key={post.id} href={`blog/${post.slug}`}>
                        <Post props={{
                        thumbnail: `${post.thumbnail}`,
                        title: `${post.title}`,
                        publishedAt: `${post.createdAt}`,
                        tags: post.tags
                        }}/>
                      </Link>
                    )
                  })
                }
          </GridLayout>
        </BlogBody>
      </>
    );
};

export default Blog;

const BlogBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 20px;
    /* padding: 0 20px; */
    gap: 48px;


  
    ${GridLayout} {
        gap: 48px;
        width: 100%;
        
        @media(max-width: 768px) {
            grid-template-columns: repeat(2, 1fr)
        }
        @media(max-width: 550px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const getStaticProps = async () => {
    const database = await getAllPublished();
    // console.log(database[0].tags)
    return {
      props: {
        posts: database,
      },
          // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };

    
  }


