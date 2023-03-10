import styled from "styled-components";
import { colors } from "./colors";
import { Righteous } from '@next/font/google';

export const mainFont = Righteous({weight: '400', subsets: ['latin'] });

export const MainHeading = styled.h1`
    font-family: 'Righteous';
    font-size: 64px;
    line-height: 1em;
    color: ${colors.headlineColor};
    @media(max-width: 550px) {
        font-size: 38px;
    }
`;

export const Heading = styled.h2`
    position: relative;
    font-family: 'Tilt';
    font-style: normal;
    width: fit-content;
    font-weight: 400;
    font-size: 48px;
    line-height: 1em;
    align-self: center;
    color: ${colors.headlineColor};
    z-index: 1;
    @media(max-width: 550px) {
        font-size: 32px;
    }
`;

export const SmallHeading = styled.h3`
    font-family: 'Tilt';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 1em;
    color: ${colors.headlineColor};
    @media(max-width: 550px) {
        font-size: 27px;
    }
`;

export const Paragraph = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    color: ${colors.paragraphColor};
    @media(max-width: 550px) {
        font-size: 16px;
    }
`;

export const Tags = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${colors.paragraphColor};
`;