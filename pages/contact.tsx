import { MainHeading } from '@/lib/typography';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';


const Contact = () => {
    return (
        <>
            <Head><title>Contacts</title></Head>
            <ContactPageBody>
                <MainHeading >Contact me!</MainHeading>
                
            </ContactPageBody>
        </>
        
    );
};

export default Contact;

const ContactPageBody = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
`;