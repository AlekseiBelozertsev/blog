import React from 'react';
import styled from "styled-components";
import Link from "next/link";

type LinkButtonProps = {
    bgColor?: string,
    border?: string,
    content?: string,
    link: string,
}

const LinkButton = ({  bgColor, border, content, link }: LinkButtonProps ) => {
    return (
        <LinkContainer 
        href={link}
        bgColor={bgColor}
        border={border}>
           <span>{content}</span> 
        </LinkContainer>
    );
};

export default LinkButton;

export const LinkContainer = styled(Link)<{ bgColor?: string, border?: string }>`
    background-color: transparent;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s;
    width: fit-content;
    border: ${ props => props.border };
    box-sizing: border-box;
    :hover {
        background-color: ${ props => props.bgColor }
    }
    :focus {
        background-color: ${ props => props.bgColor }
    }
    @media(max-width: 768px) {
        padding: 8px;
    }

    span {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        text-transform: uppercase;
        color:  #111827;
    }
`;