import React from 'react';
import { getDatabase, getPage } from '@/lib/notion';
import Link from 'next/link';

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? ''

type Posts = {
  properties: {
    Name: {
      title: [{
        plain_text: string,
      }],
    },
    id: {
      formula: {
        string: string,
      },
    },
    Published: {
      checkbox: boolean,
    },
    Slug: {
      formula: {
        string: string,
      }
    }
  },
  createdAt: boolean,
  tag?: string,
  slug: string,
  img?: string,
}[];

const Blog = ({posts} : {posts: Posts}, {page}: {page: any}) => {
    console.log(page)
    return (
        <div>
            <ul>
                {
                    posts.map((post: any) => {
                        return (
                        <li key={post.properties.id.formula.string}>
                          <Link href={`blog/${post.properties.Slug.formula.string}`} >
                              {post.properties.Name.title[0].plain_text}
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
    const database = await getDatabase(databaseId);
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