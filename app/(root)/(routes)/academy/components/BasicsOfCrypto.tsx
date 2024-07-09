'use client'
import { ArrowDown, ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import BasicsDropdown from "./BasicsDropdown";

const BasicsOfCrypto = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="max-w-[30rem]">
      <div
        onClick={() => setDropdown((prev) => !prev)}
        className="
        hover:bg-neutral-700
        transition-colors
        cursor-pointer
        flex
        gap-5 
        h-[13rem] 
        bg-neutral-800
        py-2
        px-4
        sm:px-8
        rounded-3xl
        items-center
        "
      >
        <figure
          className="
        border
        rounded-3xl 
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
          text-white
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
          <h1 className="text-xl text-white sm:text-2xl whitespace-nowrap">
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
            <h1 className="text-sm text-white">1490 XPs</h1>
          </div>
        </div>
        <div className="self-start">
          <ChevronDown />
        </div>
      </div>
      {dropdown && <BasicsDropdown dropdown={dropdown} />}
    </div>
  );
};

export default BasicsOfCrypto;
