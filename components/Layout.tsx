import React from 'react';
import styled from 'styled-components';

// const MainLayout = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 100vh;
//       
// `;

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1125px;
    /* height: 100%; */
    margin: 120px auto;

`

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <PageLayout>
                {children}
            </PageLayout> 
        </>
    );
};

export default Layout;