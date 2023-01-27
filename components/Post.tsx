import React from 'react';
import styled from 'styled-components';
import { ResponsiveImage169, FlexColumn, FlexRow } from '@/lib/layouts';
import { SmallHeading } from '@/lib/typography';
import Image from 'next/image';
import Tag from './Tag';
import { colors } from '@/lib/colors';

type PostProps = {
    thumbnail: string,
    title: string,
    publishedAt: string,
    tags: any,

}

const Post = ({props}: {props: PostProps}) => {
    return (
        <PostBody>
            <ResponsiveImage169>
                <Image src={props.thumbnail} alt={props.title} fill />
            </ResponsiveImage169>
            <FlexColumn>
                <SmallHeading>{props.title}</SmallHeading>
                <FlexRow>
                    {
                        props.tags.map((tag: any) => {
                            return <Tag key={tag.id} content={tag.name} bgcolor={colors.successGreen}/>
                        })
                    }
                </FlexRow>
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

    img {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
`;