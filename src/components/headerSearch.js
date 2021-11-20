import { SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './avatar';
import HeaderOptions from './headerOptions';

function HeaderSearch() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <nav className="flex w-full px-3 py-4 items-center lg:p-6">
        <div className="flex w-full">
          <h1 className="flex items-center">
            <Image 
              src='https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
              alt='Google Logo'
              height={36}
              width={108}   
              className="cursor-pointer"
              onClick={() => router.push('/')}
            />
          </h1>
          <form className="flex flex-grow px-6 py-2 ml-5 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center lg:ml-10">
            <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
            <XIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
              onClick={() => (searchInputRef.current.value= "")}
            />
            <div className="hidden sm:inline-flex border-l-2 pl-4 border-gray-300 cursor-pointer">
              <Image 
                src="https://seeklogo.com/images/G/google-mic-logo-33133A4F5F-seeklogo.com.png"
                alt="Google microphone"
                title="Search by voice"
                width={13}
                height={19}
              />
            </div>
            <SearchIcon className="h-6 pl-3 text-blue-500 hidden sm:inline-flex cursor-pointer" />
            <button hidden type="submit" onClick={search}>Search</button>
          </form>
        </div>
        <Avatar url="https://avatars.githubusercontent.com/u/65976843?v=4" className="ml-auto" />
      </nav>
      <HeaderOptions />
    </header>
  )
}

export default HeaderSearch;
