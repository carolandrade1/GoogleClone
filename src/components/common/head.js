import React from 'react';
import Head from 'next/head';
import router from 'next/router';

function IndexHead({ title }) {
  
  const term = router.query.term;
  const hasTerm = term ? `${term}${' | '}` : `${''}`; 
  
  return (
    <>
      <Head>
      <title>{hasTerm}{title}</title>
        <meta name="description" content="Google Clone made with next" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" />
      </Head>
    </>
  );
}

export default IndexHead;