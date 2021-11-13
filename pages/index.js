import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Avatar from '../src/components/avatar';
import { ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../src/components/footer';
import IndexHead from '../src/components/common/head';

export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null);
  
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <IndexHead title='Google' />

      <header className="w-full">
        <nav className="flex w-full p-5 justify-end text-sm text-gray-700">
          <ul className="flex space-x-4 items-center">
            <li className="link">Gmail</li>
            <li className="link">Images</li>
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
            <Avatar url="https://avatars.githubusercontent.com/u/65976843?v=4" />
          </ul>
        </nav>
      </header>

      <form className="flex flex-col items-center mt-12 flex-grow px-2 md:w-4/5">
        <h1>
          <Image
            src="https://www.loosebyte.com/wp-content/uploads/2020/10/google-logo-transparent.png"
            alt="Google Logo"
            width={310}
            height={105}
          />
        </h1>

        <div className="flex w-full mt-5 shadow-md focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2.5 items-center sm:max-w-xl">
          <SearchIcon className="h-4 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" placeholder="Search Google or type a URL" className="flex-grow focus:outline-none" />
          <Image 
            src="https://seeklogo.com/images/G/google-mic-logo-33133A4F5F-seeklogo.com.png"
            alt="Google microphone"
            title="Search by voice"
            width={13}
            height={19}
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I{"'"}m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
