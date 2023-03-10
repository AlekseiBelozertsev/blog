import React from 'react';
import styled from 'styled-components';
import { ResponsiveImage169, FlexColumn, FlexRow, DateWrapper } from '@/lib/layouts';
import { Tags } from '@/lib/typography';
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
                <Image src={props.thumbnail} alt={props.title} fill sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" />
            </ResponsiveImage169>
            <FlexColumn>
                <SmallHeading>{props.title}</SmallHeading>
                <FlexRow>
                    <FlexRow>
                        {
                            props.tags.map((tag: any) => {
                                return <Tag key={tag.id} content={tag.name} bgcolor={colors.pendingBlue}/>
                            })
                        }
                    </FlexRow>
                    <DateWrapper><Tags>{props.publishedAt}</Tags></DateWrapper>
                </FlexRow>
            </FlexColumn>
            <hr />
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
        @media(max-width: 550px) {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    }

    ${FlexRow} {
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
    }

    hr {
        width: 100%;
        margin-top: 16px;
        display: none;
        border: 1.5px solid ${colors.mainBackground};
        border-radius: 5px;
        @media(max-width: 550px) {
            display: block;
        }
    }
`;