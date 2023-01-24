import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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

    .logo {
        font-size: 40px;
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

const LinkContainer = styled(Link)`
    background-color: transparent;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s;
    :hover {
        background-color: #ECECE9
    }
    :focus {
        background-color: #ECECE9
    }
    @media(max-width: 768px) {
        padding: 8px;
    }
`;

const Navbar = () => {
    return (
        <NavbarBody>
            <NavbarInner>  
                <span className='logo'>🐱‍👤</span>
            </NavbarInner>
            <NavbarInner>
                <LinkContainer href={'/'}>
                    <span>Projects</span>
                </LinkContainer>
                <LinkContainer href={'/'}>
                    <span>Contact</span>
                </LinkContainer>
                <LinkContainer href={'/blog'}>
                    <span>Blog</span>
                </LinkContainer>
            </NavbarInner>
        </NavbarBody>
    );
};

export default Navbar;