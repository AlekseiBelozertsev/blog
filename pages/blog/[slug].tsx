import React from 'react';
import { getAllPublished, getSinglePost } from '@/lib/notion';
import reactMarkdown from 'react-markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const BlogPost = ({ post }: { post: any }) => {
    return (
        <div>
            <ReactMarkdown>
                {post.markdown}
            </ReactMarkdown>
        </div>
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

