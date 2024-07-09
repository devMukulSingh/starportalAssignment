import { CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  airdrop: {
    image: string;
    task: number;
    title: string;
    id: number;
  };
  openDropdown: boolean;
};

const AirdropCard = ({ airdrop, openDropdown }: Props) => {
  return (
    <div
      className={`flex w-full  items-center p-3 h-[7rem] gap-3 bg-neutral-800 ${
        openDropdown ? "rounded-b-0" : "rounded-xl"
      }`}
    >
      <figure className="hidden sm:block relative h-[5rem] w-1/3 ">
        <Image
          className="object-cover rounded-md"
          src={airdrop.image}
          alt="airdrops"
          fill
        />
      </figure>
      <div className="flex flex-col gap-3 justify-center w-full sm:w-2/3">
        <h1 className="text-neutral-200 text-md sm:text-lg">
          {`#${airdrop.id}`}: {airdrop.title}
        </h1>
        <hr className="border-dashed w-full" />
        <div className="flex items-center gap-2 justify-between w-full">
          <h1 className="text-sm">
            {airdrop.task}
            {""}Tasks
          </h1>
          <div className="h-3 rounded-full bg-neutral-700 w-5/6 "></div>
          <CheckCircle2Icon className="self-end ml-auto" size={20} />
        </div>
      </div>
    </div>
  );
};

export default AirdropCard;
