import React from 'react';
import styled from 'styled-components';
import { getAllPublished, getSinglePost } from '@/lib/notion';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { colors } from '@/lib/colors';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import { ResponsiveImage169 } from '@/lib/layouts';
import Head from 'next/head';
import Tag from '@/components/Tag';

const BlogPage = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;

    img:first-child {
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        @media(max-width: 375px) {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
    }

    ${ResponsiveImage169} {
        background: ${colors.mainBackground};
        margin: 24px 0 48px 0;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        @media(max-width: 375px) {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
    }

    h1 {
        position: relative;
        font-family: 'Righteous', cursive;
        font-style: normal;
        width: fit-content;
        font-weight: 700;
        font-size: 48px;
        line-height: 1em;
        align-self: center;
        color: ${colors.headlineColor};
        margin-bottom: 48px;
        z-index: 1;
        :before {
            content: '';
            position: absolute;
            width: 100%;
            height: 15px;
            top: 70%;
            background: ${colors.additionalColor};
            z-index: -1;
        }
        @media(max-width: 375px) {
            font-size: 32px;
        }
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-style: bold;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.5em;
        margin-top: 24px;
        color: ${colors.headlineColor};
        @media(max-width: 375px) {
            font-size: 24px;
            margin-bottom: 8px;
        }
    }

    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        color: ${colors.paragraphColor};
        @media(max-width: 375px) {
            font-size: 16px;
        }
    }

    li {
        position: relative;
        left: 30px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: ${colors.paragraphColor};
        @media(max-width: 375px) {
            font-size: 16px;
        }
    }
    
    blockquote {
        padding: 32px;
        margin: 32px 0;
        background: #F1F1EF;
        border-radius: 8px;
    }

    hr {
        width: 100%;
        margin: 16px 0;
        border: 1.5px solid ${colors.mainBackground};
        border-radius: 5px;

    }
`;

const BlogPost = ({ post }: { post: any }) => {
    return (
        <>
            <Head><title>Post</title></Head>
            <BlogPage>
                <ResponsiveImage169>
                    <Image src='/test.jpg' fill alt={post.title} />
                </ResponsiveImage169>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}>
                    {post.markdown}
                </ReactMarkdown>
            </BlogPage>
        </>
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



