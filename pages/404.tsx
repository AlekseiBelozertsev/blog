import { FlexColumn } from '@/lib/layouts';
import { MainHeading, Heading } from '@/lib/typography';
import React from 'react';
import styled from 'styled-components';

const PageNotFound = () => {
    return (
       <NotFound>
        <FlexColumn>
            <MainHeading>
                Oopsie!
            </MainHeading>
            <Heading>
                Page not found.
            </Heading>
        </FlexColumn>
       
       </NotFound>
    );
};

export default PageNotFound;

const NotFound = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr;
    align-items: center;
`;