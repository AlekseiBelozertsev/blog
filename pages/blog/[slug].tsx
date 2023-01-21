import { getSinglePost } from '@/lib/notion';
import React from 'react';
import { databaseId } from '.';

const BlogPost = () => {
    return (
        <div>
            
        </div>
    );
};

export default BlogPost;

const getStaticProps = async ({params} : {params: any}) => {
    const post = await getSinglePost(params.slug, databaseId);
    console.log(params)
    return {
        props: {
            post,
        },
        revalidate: 60
    }
}

