import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-top: 120px;    
`;

export const PageLayout = styled.div`
    display: flex;
    max-width: 1125px;
    /* height: 100%; */
    margin: 0 auto;

`

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <MainLayout>
            <Navbar />
            <PageLayout>
                {children}
            </PageLayout> 
        </MainLayout>
    );
};

export default Layout;