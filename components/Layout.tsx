import React from 'react';
import styled from 'styled-components';

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1125px;
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