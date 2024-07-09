import { Book, BookOpen } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const CryptoDictionary = () => {
  return (
    <div
      className="
        flex
        justify-center
    "
    >
      <div
        className="
            flex
            flex-col
            gap-10
            md:w-5/6
            w-full
            md:p-0
            p-5

        "
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-xl sm:text-2xl font-medium">Crypto Dictionary</h1>
          <h1 className="text-sm">
            Your one-stop to catch up on all crypto terms
          </h1>
        </div>
        <figure
          className="
            relative
            h-[30rem]
            w-full
        "
        >
          <Image
            className="object-cover rounded-3xl"
            src={
              "https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
            }
            alt="crypto-dictionary"
            fill
          />
          <div className="
          absolute 
          bottom-5 
          flex 
          justify-between 
          w-full
          sm:px-5
          px-3
          text-neutral-400
          gap-3

            ">
            <div className=' '>
              <h1 className='text-2xl '>Web3 + Degen Glossary</h1>
              <h1>Your own crypto dictionary</h1>
            </div>
            <div className='cursor-pointer p-5 rounded-full bg-neutral-900'>
                <BookOpen size={25}/>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default CryptoDictionary