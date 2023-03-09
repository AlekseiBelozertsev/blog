import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import { FlexRow } from '@/lib/layouts';

const Footer = () => {
    return (
        <FooterBody>
            <FlexRow>
                <Link target='_blank' href={'https://www.linkedin.com/in/alexei-belozertsev-85b04b224/'}>
                    <Icon link='LinkedIn'>👨🏻‍💼</Icon>
                </Link>
                <Link target='_blank' href={'https://www.instagram.com/'}>
                    <Icon link='Instagram'>📸</Icon>
                </Link>
                <Link target='_blank' href={'https://github.com/AlekseiBelozertsev'}>
                    <Icon link='Github'>👨🏻‍💻</Icon>
                </Link>
            </FlexRow>
        </FooterBody>
    );
};

export default Footer;

const FooterBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;

    a {
        position: relative;
        background-color: none;
        border-radius: 50%;
        padding: 10px;
        transition: background-color .4s;
        cursor: pointer;
        
        :hover {
            background-color: ${colors.mainBackground};
        }
    }

    ${FlexRow} {
        gap: 24px;
        padding: 25px;
    }
`;

const Icon = styled.span<{link: string}>`
    position: relative;
    font-size: 40px;
    :before {
        content: '${props => props.link}';
        visibility: hidden;
        position: absolute;
        padding: 5px;
        background-color: ${colors.additionalBackground};
        color: white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        border-radius: 5px;
        left: 50%;
        transform: translateX(-50%);
        top: -45px;
    }
    :hover:before {
        visibility: visible;
    }
   
`;
