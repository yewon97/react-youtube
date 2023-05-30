import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import Search from './Search';

export default function Header() {
  return (
    <header className="flex items-center justify-center h-20 border-b px-5">
      <h1 className="flex items-center gap-x-3">
        <BsYoutube className="text-default-red text-3xl" />
        <span className="text-white text-2xl uppercase font-bold">youtube</span>
      </h1>
      <Search />
    </header>
  );
}
