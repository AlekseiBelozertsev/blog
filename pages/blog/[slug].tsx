import React from 'react';
import { getAllPublished, getSinglePost } from '@/lib/notion';
import styled from 'styled-components';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const BlogPost = ({ post }: { post: any }) => {
    return (
        <BlogPage>
            <ReactMarkdown>
                {post.markdown}
            </ReactMarkdown>
        </BlogPage>
    );
};

export default BlogPost;

export const getStaticProps = async ({ params }: { params: any }) => {
    const post = await getSinglePost(params.slug)
   
    return {
        props: {
            post,
        },
        revalidate: 60
        };
  };

export const getStaticPaths = async () => {
    const posts = await getAllPublished();
    const paths = posts.map(({ slug }: { slug: string }) => ({ params: { slug } }));
  
    return {
      paths,
      fallback: "blocking",
    };
  };

  const BlogPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  img {
    max-width: 800px;
    aspect-ratio: 16 / 9;
  }
  img:first-child {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  `;

