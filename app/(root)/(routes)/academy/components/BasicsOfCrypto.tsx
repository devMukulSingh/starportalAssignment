import Image from "next/image";
import React from "react";

const BasicsOfCrypto = () => {
  return (
    <div
      className="
        max-w-[30rem]
        min-w-10
        flex 
        gap-5 
        h-[15rem] 
        bg-neutral-900
        p-4
        sm:p-8
        rounded-xl
        items-center
        "
    >
      <figure
        className="
        border
        rounded-2xl 
        p-5
        sm:p-10
        relative
        size-[7rem]
        sm:size-[10rem]
        hidden
        sm:flex
        justify-center
        "
      >
        <Image
          fill
          className="object-cover"
          alt="basics"
          src={"/basicsCrypto.png"}
        />
        <div
          className="
            px-3
            sm:px-4
            py-2
            bg-gradient-to-b
            from-blue-900
            to-black
            rounded-full
            absolute
            border
            border-neutral-700
            sm:text-sm
            text-xs
            bottom-3
            whitespace-nowrap
            text-center
            self-center
            "
        >
          6 Quests
        </div>
      </figure>
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="text-xl sm:text-2xl whitespace-nowrap">
          Basics of Crypto
        </h1>
        <h1 className="text-xs sm:text-sm text-neutral-400">
          The safest and easiest place to start your crypto journey!
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
          <h1 className="text-sm">1490 XPs</h1>
        </div>
      </div>
    </div>
  );
};

export default BasicsOfCrypto;
