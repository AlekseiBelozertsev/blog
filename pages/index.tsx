import Head from 'next/head';
import { Inter } from '@next/font/google';
import styled from 'styled-components';


const inter = Inter({ subsets: ['latin'] })


// export const postTitle = posts[0] 

export default function Home() {
  return (
    <>
      <Head>
        <title>F#ucker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <h1>😠 What's all about?</h1>
      </HomeWrapper>
    </>
  )
};

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
`;
