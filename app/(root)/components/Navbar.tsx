import React from 'react'
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import { Button } from '@/components/ui/button';

const Navbar = () => {

  return (
    <div className='
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
        '>
        <h1 className='text-2xl'>
            intract.
        </h1>
        <NavLinks/>
        <SearchBar/>
        <Button 
          className='bg-white 
          hover:bg-neutral-200 
          transition-colors
          text-black
          px-7
          h-8
          ' >
          Sign In
        </Button>
    </div>
  )
}

export default Navbar