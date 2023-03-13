import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { LinkContainer } from './Button';
import { colors } from '@/lib/colors';

const NavbarBody = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    backdrop-filter: blur(12px);
    background: transparent;
    z-index: 2;

    @media(max-width:345px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 120px;
    }
`;

const NavbarInner = styled.div`
   display: flex;
   padding: 16px;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: fit-content;
   gap: 24px;
   font-family: 'Inter';
   font-size: 18px;
   color: #111827;
   @media(max-width: 768px) {
        gap: 8px;
        padding: 8px;
        font-size: 16px;
    }
`;

const Navbar = () => {
    return (
        <NavbarBody>
            <NavbarInner>  
                <Image alt='Logo' src={'/img/cat_ninja.png'} width='50' height='50'/>
            </NavbarInner>
            <NavbarInner>
                <LinkContainer bgcolor={colors.mainBackground} href={'/'}>
                    <span>Projects</span>
                </LinkContainer>
                <LinkContainer bgcolor={colors.mainBackground} href={'/contact'}>
                    <span>Contact</span>
                </LinkContainer>
                <LinkContainer bgcolor={colors.mainBackground} href={'/blog'}>
                    <span>Blog</span>
                </LinkContainer>
            </NavbarInner>
        </NavbarBody>
    );
};

export default Navbar;