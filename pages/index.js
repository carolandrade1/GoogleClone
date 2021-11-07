import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../src/components/avatar';
import { ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../src/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google Clone made with next" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" />
      </Head>

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

      <form className="flex flex-col items-center mt-28 flex-grow px-2 md:w-4/5">
        <h1>
          <Image
            src="https://www.google.com/logos/doodles/2021/halloween-2021-6753651837109122.2-2xa.gif"
            alt="Google Logo"
            width={340}
            height={120}
          />
        </h1>

        <div className="flex w-full mt-5 shadow-md focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2.5 items-center sm:max-w-xl">
          <SearchIcon className="h-4 mr-3 text-gray-500" />
          <input type="text" placeholder="Search Google or type a URL" className="flex-grow focus:outline-none" />
          <Image 
            src="https://seeklogo.com/images/G/google-mic-logo-33133A4F5F-seeklogo.com.png"
            alt="Google microphone"
            title="Search by voice"
            width={13}
            height={19}
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I{"'"}m Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
