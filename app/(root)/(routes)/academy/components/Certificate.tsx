import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Certificate = () => {
  return (
    <div
      className="
    flex
    flex-col
    gap-3
    py-10
    self-end
    "
    >
      <div className='flex flex-col items-center gap-5'>
        <div
          className="
        bg-neutral-700
        border-2
        rounded-full
        h-fit
        w-fit
        p-3
        "
        >
          <Check className="text-neutral-500" />
        </div>
        <figure className="p-1 rounded-xl border-2 w-fit">
          <Image
            className="
                object-contain 
                rounded-xl 
                border
                "
            alt="intractCertified"
            src={"/intractCertified.png"}
            width={150}
            height={200}
          />
        </figure>
      </div>

      <h1 className="text-lg text-neutral-500">
        Intract Certified: Learner NFT
      </h1>
      <h1
        className="
            text-sm 
            text-neutral-700
            
            "
      >
        Your crypto black-belt <br />
        certificate
      </h1>
      <Button
        className="
            bg-neutral-800
            hover:bg-neutral-800
            w-full
            "
      >
        Claim
      </Button>
    </div>
  );
}

export default Certificate