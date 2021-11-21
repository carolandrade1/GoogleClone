import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function NotFound_404() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center p-4 mt-20">
      <div className="flex flex-col gap-y-4 p-4 md:pr-12">
        <h1 className="flex items-center" title="Google Home Page">
          <Image 
            src='https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
            alt='Google Logo'
            height={50}
            width={150}   
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </h1>
        <p>
          <strong>404.</strong>
          <span className="text-gray-400"> That’s an error.</span>
        </p>
        <p>
          The requested URL /404 was not found on this server.<br />
          <span className="text-gray-400">
            That’s all we know.
          </span>
        </p>
      </div>
      <div className="hidden md:inline-flex">
        <Image 
          src='http://aquascript.com/wp-content/uploads/2013/05/robot-error-404-new.jpg'
          alt='Broken Bot'
          height={200}
          width={160}   
        />
      </div>
    </div>
  )
}

export default NotFound_404
