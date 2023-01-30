import React from 'react';
import styled from 'styled-components';
import { getAllPublished, getSinglePost } from '@/lib/notion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const BlogPage = styled.section`
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

const CodeBlock = (language: any, codestring: any) => {
    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag={`div`}>
            {codestring}
        </SyntaxHighlighter>
    )
}

const BlogPost = ({ post }: { post: any }) => {
    return (
        <BlogPage>
            <ReactMarkdown
                components={{
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                    <CodeBlock
                        codestring={String(children).replace(/\n$/, '')}
                        language={match[1]}
                    />
                    ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                    )
                }
            }}>
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



