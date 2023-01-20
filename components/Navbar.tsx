import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavbarBody = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    backdrop-filter: blur(6px);
    background: transparent;
`;

const NavbarInner = styled.div`
   display: flex;
   padding: 16px;
   flex-direction: row;
   justify-content: center;
   width: 800px;
   gap: 36px;
   color: #028476;
`;

const Navbar = () => {
    return (
        <NavbarBody>
            <NavbarInner>
                <Link href={'/'}>Beback</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/blog'}>Blog</Link>
            </NavbarInner>
        </NavbarBody>
    );
};

export default Navbar;