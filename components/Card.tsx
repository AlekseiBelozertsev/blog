import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Paragraph, SmallHeading } from '@/lib/typography';
import { colors } from '@/lib/colors';
import Image from 'next/image';
import { FlexColumn, FlexRow, ResponsiveImage169 } from '@/lib/layouts';
import Tag from './Tag';

type TagObject = {
    content: string,
    color: string,
}

type Card = {
    thumbnail: string,
    projectalt: string,
    icon?: string,
    projectName: string,
    description: string,
    tags: TagObject[],
    to: string,
}

const Card = ({props}: {props: Card}) => {
    return (
        <Link target='_blank' href={props.to}>
            <CardBody>
                <ResponsiveImage169>
                    <Image src={props.thumbnail} alt={props.projectalt} fill sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" />
                </ResponsiveImage169>
                <FlexColumn>
                    <Paragraph>{props.projectName}</Paragraph>
                    <span>{props.description}</span>
                </FlexColumn>
                <FlexRow>
                    {props.tags.map((tag) => {return <Tag key={tag.content} bgcolor={tag.color} content={tag.content}></Tag>})}
                </FlexRow>
            </CardBody>
        </Link>
        
    );
};

export default Card;

const CardBody = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 16px;
    cursor: pointer;

    ${Paragraph} {
        font-weight: 700;
        @media(max-width: 768px) {
            font-size: 24px;
        }
    }

    
    ${FlexRow} {
        position: absolute;
        visibility: hidden;
        top: 105%;
        left: 0;
        transition: visibility .0s;
        gap: 16px;
        @media(max-width: 1200px) {
            visibility: visible;
            top: 85%;
            left: 3%;
        }
        @media(max-width: 550px) {
            visibility: visible;
            top: 88%;
            left: 2%;
        }
    }

    :before {
        content: '';
        position: absolute;
        width: 100%;
        aspect-ratio: 4 / 3;
        top: 24px;
        left: 16px;
        background: ${colors.mainBackground};
        border-radius: 8px;
        z-index: -1;
        transition: all .2s;
    }
    
    :hover:before {
        width: 110%;
        top: -15px;
        aspect-ratio: 1 / 1;
        left: -15px;
    }

    :hover ${FlexRow} {
        display: flex;
        visibility: visible;
        transition-delay: .25s
    }

    ${FlexColumn} {
        align-items: flex-start;
        gap: 8px;
    }


    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: ${colors.paragraphColor};
    }

    img {  
        border-radius: 4px;
        border: 2px solid ${colors.mainBackground};
    }
    @media(max-width: 1200px) {
        :before {
            display: none;
        }

        background: ${colors.mainBackground};
        padding: 8px 8px 54px 8px;
        border-radius: 4px;
    }
`;