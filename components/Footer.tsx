import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors } from '@/lib/colors';
import { FlexRow } from '@/lib/layouts';

const Footer = () => {
    return (
        <FooterBody >
            <FlexRow>
                <Link href={'https://www.linkedin.com/in/alexei-belozertsev-85b04b224/'}>
                    <span  className='icon'>👨🏻‍💼</span>
                </Link>
                <Link href={'https://www.instagram.com/'}>
                    <span  className='icon'>📸</span>
                </Link>
                <Link href={'https://github.com/AlekseiBelozertsev'}>
                    <span  className='icon'>👨🏻‍💻</span>
                </Link>
            </FlexRow>
        </FooterBody>
    );
};

export default Footer;

const FooterBody = styled.div<{link?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
        font-size: 40px;
    }

    a {
        position: relative;
        background-color: none;
        border-radius: 50%;
        padding: 10px;
        transition: background-color .4s;
        cursor: pointer;
        :before {
            content: 'Content';
            content: $;
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
            top: -30px;
        }
        :hover:before {
            visibility: visible;
        }
        :hover {
            background-color: ${colors.mainBackground};
        }
    }

    ${FlexRow} {
        gap: 24px;
        padding: 25px;
    }
`;