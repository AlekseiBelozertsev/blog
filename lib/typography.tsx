import styled from "styled-components";
import { colors } from "./colors";

export const MainHeading = styled.h1`
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 1em;
    color: ${colors.headlineColor};
    @media(max-width: 550px) {
        font-size: 32px;
    }
`;

export const Heading = styled.h2`
    position: relative;
    font-family: 'Righteous', cursive;
    font-style: normal;
    width: fit-content;
    font-weight: 700;
    font-size: 48px;
    line-height: 1em;
    align-self: center;
    color: ${colors.headlineColor};
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 15px;
        top: 70%;
        background: ${colors.additionalColor};
        z-index: -1;
    }
`;

export const SmallHeading = styled.h3`
    font-family: 'Inter', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 32px;
    line-height: 1em;
    color: ${colors.headlineColor};
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