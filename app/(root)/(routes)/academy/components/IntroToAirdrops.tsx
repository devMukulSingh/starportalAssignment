"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AirdropDropdown from "./AirdropsDropdown";
import RoadToEarnerSvg from "./RoadToEarnerSvg";

const IntroToAirdrops = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="w-full flex justify-center relative  ">
      <div className="absolute left-24 ">
          <RoadToEarnerSvg/>
      </div>
    <div
      className="self-center max-w-[32rem] w-full "
      >
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="
        flex 
        gap-5 
        h-[14rem] 
        bg-neutral-800
        hover:bg-neutral-700
        transition-colors
        cursor-pointer
        sm:px-5
        sm:py-4
        p-4
        rounded-3xl
        w-full
        items-center
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
        hidden
        sm:flex
        justify-center
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
            text-white
            "
          >
            4 Quests
          </div>
        </figure>

        <div className="flex flex-col gap-3 justify-center sm:w-auto w-full ">
          <h1 className="text-xl sm:text-2xl text-white whitespace-nowrap">
            Introduction to Airdrops
          </h1>
          <h1 className="text-xs sm:text-sm text-neutral-400">
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
            <h1 className="text-sm text-white">1040 XPs</h1>
          </div>
        </div>

        <ChevronDown className="self-start" />
      </div>
      {openDropdown && <AirdropDropdown openDropdown={openDropdown} />}
    </div>
            </div>
  );
};

export default IntroToAirdrops;
