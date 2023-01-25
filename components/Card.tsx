import React from 'react';
import styled from 'styled-components';
import { SmallHeading } from '@/src/typography';
import { colors } from '@/src/colors';
import Image from 'next/image';
import { FlexColumn, ResponsiveImage169 } from '@/src/layouts';

type Card = {
    thumbnail: string,
    projectalt: string,
    icon?: string,
    projectName: string,
    description: string,
}

const Card = ({props}: {props: Card}) => {
    return (
        <CardBody>
            <ResponsiveImage169>
                <Image src={props.thumbnail} alt={props.projectalt} fill />
            </ResponsiveImage169>
            <FlexColumn>
                <SmallHeading>{props.projectName}</SmallHeading>
                <span>{props.description}</span>
            </FlexColumn>
        </CardBody>
    );
};

export default Card;

const CardBody = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 16px;
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
`;