import React from "react";
import BasicCard from "./BasicCard";
import AirdropCard from "./AirdropCard";
type Props = {
  openDropdown: boolean;
};

const AirdropDropdown = ({ openDropdown }: Props) => {
  const airdrops = [
    {
      image: "/airdrops1.jpg",
      title: "What are airdrops, and",
      task: 7,
      id: 1,
    },
    {
      image: "/airdrops2.jpg",
      title: "Types of airdrops",
      task: 10,

      id: 2,
    },
    {
      image: "/airdrops3.png",
      title: "How to earn huge$$$$",
      task: 11,

      id: 3,
    },
    {
      image: "/airdrops4.jpg",
      title: "Things to keep in mind!",
      task: 7,
      id: 4,
    },
  ];
  return (
    <div
      className="
    absolute
    max-w-[32rem]
    flex 
    w-full
    rounded-b-3xl
    h-[23rem]
    overflow-auto
    bg-neutral-900
    sm:p-5
    p-3
    "
    >
      <div className="w-full flex flex-col gap-3">
        {airdrops.map((airdrop, index) => (
          <AirdropCard
            airdrop={airdrop}
            key={index}
            openDropdown={openDropdown}
          />
        ))}
      </div>
    </div>
  );
};

export default AirdropDropdown;
