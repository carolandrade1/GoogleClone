import Head from 'next/head';
import Avatar from '../src/components/avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google Clone made with next" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" />
      </Head>

      <header>
        <nav className="flex w-full p-5 justify-between text-sm text-gray-700">
          <ul className="flex space-x-4 items-center">
            <li className="link">About</li>
            <li className="link">Store</li>
          </ul>
          <ul className="flex space-x-4 items-center">
            <li className="link">Gmail</li>
            <li className="link">Images</li>
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
            <Avatar url="https://avatars.githubusercontent.com/u/65976843?v=4" />
          </ul>
        </nav>
      </header>
    </div>
  )
}
