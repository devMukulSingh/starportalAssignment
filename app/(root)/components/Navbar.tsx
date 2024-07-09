import React from 'react'
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const Navbar = () => {

  return (
    <div
      className="
        z-40
        px-5
        text-white
        fixed 
        top-0 
        w-screen 
        h-16 
        bg-black
        flex
        items-center
        justify-between
        gap-5
        "
    >
      <h1 className="text-xl md:text-2xl sm:block hidden">intract.</h1>
      <NavLinks />
      <SearchBar />
      <Button
        className="bg-white 
          hover:bg-neutral-200 
          transition-colors
          text-black
          px-2
          sm:px-4
          w-auto
          h-8
          gap-1

          "
      >
        <h1 className="sm:block hidden text-sm">Sign In</h1>
        <LogIn size={20} />
      </Button>
    </div>
  );
}

export default Navbar