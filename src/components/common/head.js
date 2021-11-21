import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

function IndexHead({ title }) {
  const router = useRouter();
  const term = router.query.term;
  const hasTerm = term ? `${term}${' | '}` : `${''}`; 

  const setTitle = 'Google Clone';
  const url = 'https://google-clone-livid-zeta.vercel.app/';
  const image = 'https://i.postimg.cc/3r10Sr3s/Google-Clone.png';
  const description = 'Google Clone made with Next.js and Tailwind';
  
  return (
    <Head>
      <title>{hasTerm}{title}</title>
      <meta name="description" content="Google Clone made with next" />
      <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" />

      <meta name="description" content="Google Clone" />
      <meta name="author" content="Carol Andrade Santos" />
      <meta name="keywords" content="Next.js, React, Tailwind" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={setTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={setTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

export default IndexHead;