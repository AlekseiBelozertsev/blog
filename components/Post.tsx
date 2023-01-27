import React from 'react';
import styled from 'styled-components';
import { ResponsiveImage169, FlexColumn } from '@/lib/layouts';
import { SmallHeading } from '@/lib/typography';
import Image from 'next/image';
import Tag from './Tag';
import { colors } from '@/lib/colors';

type PostProps = {
    thumbnail: string,
    title: string,
    publishedAt: string,
    tag: string,

}

const Post = ({props}: {props: PostProps}) => {
    return (
        <PostBody>
            <ResponsiveImage169>
                <Image src={props.thumbnail} alt={props.title} fill />
            </ResponsiveImage169>
            <FlexColumn>
                <SmallHeading>{props.title}</SmallHeading>
                <Tag content={props.tag} bgcolor={colors.successGreen}/>
            </FlexColumn>
        </PostBody>
    );
};

export default Post;

const PostBody = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 16px;
`;