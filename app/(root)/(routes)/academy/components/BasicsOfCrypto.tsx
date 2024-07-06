import Image from "next/image";
import React from "react";

const BasicsOfCrypto = () => {
  return (
  
      <div className="
      self-start
        w-[30rem]
        flex 
        gap-5 
        h-[15rem] 
        bg-neutral-900
        p-8
        rounded-xl
        ">
        <figure className="
        border
        rounded-2xl 
        p-10
        relative
        w-[10rem]
        h-[10rem]
        ">
          <Image
          fill
            className="object-cover"
            alt="basics"
            src={"/basicsCrypto.png"}
          />
          <div className="
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
            ">
            6 Quests
          </div>
        </figure>
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="text-2xl">Basics of Crypto</h1>
          <h1 className="text-sm text-neutral-400">
            The safest and easiest place to start your crypto journey!
          </h1>
          <hr className="border-dashed text-neutral-400" />
          <div className="
          bg-neutral-600 
          rounded-full 
          p-3
          w-fit
          ">
            <h1 className="text-sm">1490 XPs</h1>
          </div>
        </div>
      </div>

  );
};

export default BasicsOfCrypto;
