import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SmallHeading } from '@/lib/typography';
import { colors } from '@/lib/colors';
import Image from 'next/image';
import { FlexColumn, FlexRow, ResponsiveImage169 } from '@/lib/layouts';
import Tag from './Tag';

type Card = {
    thumbnail: string,
    projectalt: string,
    icon?: string,
    projectName: string,
    description: string,
}

const Card = ({props}: {props: Card}) => {
    return (
        <Link target='_blank' href='#'>
            <CardBody>
                <ResponsiveImage169>
                    <Image src={props.thumbnail} alt={props.projectalt} fill />
                </ResponsiveImage169>
                <FlexColumn>
                    <SmallHeading>{props.projectName}</SmallHeading>
                    <span>{props.description}</span>
                </FlexColumn>
                <FlexRow>
                    <Tag content='Music'></Tag>
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

    
    ${FlexRow} {
        position: absolute;
        visibility: hidden;
        top: 105%;
        left: 0;
        transition: visibility .0s;
        @media(max-width: 375px) {
            visibility: visible;
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
        border-radius: 8px;
    }
    @media(max-width: 375px) {
        :hover:before {
            width: 100%;
            aspect-ratio: 4 / 3;
            top: 24px;
            left: 16px;
        }
    }
`;