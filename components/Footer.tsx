import { FlexRow } from '@/src/layouts';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <FooterBody>
            <FlexRow>
                <Link href={'/'}>
                    <Image src={'icons/in.svg'} alt={'LinkedIn'} width={60} height={60} />
                </Link>
                <Link href={'/'}>
                    <Image src={'icons/insta.svg'} alt={'Instagram'} width={60} height={60} />
                </Link>
                <Link href={'/'}>
                    <Image src={'icons/github.svg'} alt={'Github'} width={60} height={60} />
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

    ${FlexRow} {
        gap: 24px;
        padding: 25px;
    }
`;