import React from 'react';
import Avatar from '../components/avatar';
import { ViewGridIcon } from '@heroicons/react/solid';

function HeroHeader() {
  return (
    <header className="w-full">
      <nav className="flex w-full p-5 justify-end text-sm text-gray-700">
        <ul className="flex space-x-4 items-center">
          <li className="link">Gmail</li>
          <li className="link">Images</li>
          <li><ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /></li>
          <li><Avatar url="https://avatars.githubusercontent.com/u/65976843?v=4" /></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeroHeader
