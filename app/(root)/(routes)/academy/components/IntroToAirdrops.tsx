import Image from 'next/image';
import React from 'react'

const IntroToAirdrops = () => {
  return (
    <div
      className="
      self-center
        w-[30rem]
        flex 
        gap-5 
        h-[15rem] 
        bg-neutral-900
        p-8
        rounded-xl
        "
    >
      <figure
        className="
        border
        rounded-2xl 
        p-10
        relative
        w-[10rem]
        h-[10rem]
        "
      >
        <Image
          fill
          className="object-cover"
          alt="basics"
          src={"/airdrops.png"}
        />
        <div
          className="
            px-4
            w-24
            py-2
            bg-gradient-to-b
            from-blue-900
            to-black
            rounded-full
            absolute
            bottom-3
            border
            border-neutral-700
            text-sm
            right-4
            "
        >
          4 Quests
        </div>
      </figure>
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-2xl">Introduction to Airdrops</h1>
        <h1 className="text-sm text-neutral-400">
          Your best bet to make it big in crypto!
        </h1>
        <hr className="border-dashed text-neutral-400" />
        <div
          className="
          bg-neutral-600 
          rounded-full 
          p-3
          w-fit
          "
        >
          <h1 className="text-sm">1040 XPs</h1>
        </div>
      </div>
    </div>
  );
}

export default IntroToAirdrops