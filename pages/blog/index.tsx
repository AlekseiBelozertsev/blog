import React from 'react';
import Link from 'next/link';
import { getAllPublished } from '@/lib/notion';

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? ''

type Posts = {
  id: any;
  title: any;
  // tags: any;
  description: any;
  createdAt: string;
  slug: any;
}[]

type Post = {
  id: string;
  title: any;
  // tags: any;
  description: any;
  createdAt: string;
  slug: any;
}


const Blog = ({posts}: {posts: Posts}) => {
    return (
        <div>
            <ul>
                {
                    posts.map((post: Post) => {
                        return (
                        <li key={post.id}>
                          <Link href={`blog/${post.slug}`} >
                              {post.title}
                              {`   ` + post.createdAt}
                              {post.description}
                          </Link>
                        </li>
                      )
                    })
                }
            </ul>
        </div>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const database = await getAllPublished();
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