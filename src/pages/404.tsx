import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

const Custom404Page: NextPage = () => {
  return (
    <>
      <div className="container m-auto">
        <h1 className="font-bold">404 - Page Not Found</h1>
        <div className="w-1/4 h-1/4">
          <img src="/assets/images/posts/404.svg" alt="404error" />
        </div>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </>
  );
};

export default Custom404Page;
