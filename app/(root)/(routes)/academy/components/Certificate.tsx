import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import RoadToLearnersvg from './RoadToLearnersvg'
import RoadToLearnerSvg2 from './RoadToLearnerSvg2'

const Certificate = () => {
  return (
    <div className="relative w-full  flex mt-10 sm:mt-[-40px]">
      <div className="flex-shrink-0 ml-20 z-10  hidden sm:block ">
        <RoadToLearnersvg />
      </div>

      <div className="flex flex-col self-end gap-3 relative sm:ml-[-140px] ml-auto">
        <div className="absolute z-10 overflow-hidden self-center flex-shrink-0 place-items-center top-[150px]  hidden sm:block">
          <RoadToLearnerSvg2 />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div
            className="
        bg-neutral-700
        border-2
        rounded-full
        h-fit
        w-fit
        p-3
        z-20
        "
          >
            <Check className="text-neutral-500" />
          </div>
          <figure className="p-1 z-20 rounded-xl border-2 w-fit flex-shrink-0">
            <Image
              className="
                object-cover 
                rounded-xl 
                border
                flex-shrink-0
                "
              alt="intractCertified"
              src={"/intractCertified.png"}
              width={150}
              height={200}
            />
          </figure>
        </div>

        <h1 className="text-lg text-neutral-500 whitespace-nowrap">
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
            z-20
            bg-neutral-800
            hover:bg-neutral-800
            w-full
            "
        >
          Claim
        </Button>
      </div>
    </div>
  );
}

export default Certificate