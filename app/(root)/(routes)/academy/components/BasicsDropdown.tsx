import React from 'react'
import BasicCard from './BasicCard';
type Props = {
  dropdown:boolean
}

const BasicsDropdown = ({ dropdown }:Props) => {
  const basics = [
    {
      image: "/basics1.png",
      title: "But what is crypto and",
      task: 11,
      id: 1,
    },
    {
      image: "/basics2.jpg",
      title: "Setting up your own we",
      task: 8,

      id: 2,
    },
    {
      image: "/basics3.jpg",
      title: "What the heck is a",
      task: 8,

      id: 3,
    },
    {
      image: "/basics4.jpg",
      title: "Swapping and bridging",
      task: 10,
      id: 4,
    },
    {
      image: "/basics5.jpg",
      title: "NFTs and why they-re ",
      task: 6,

      id: 5,
    },
    {
      image: "/basics6.jpg",
      title: "Doing quests and winning",
      task: 8,

      id: 6,
    },
  ];
  return (
    <div
      className="
      absolute
    max-w-[30rem]
    flex 
    w-full
    rounded-b-3xl
    h-[23rem]
    overflow-auto
    bg-neutral-900
    p-5
    "
    >
      <div className="w-full flex flex-col gap-3">
        {basics.map((basic, index) => (
          <BasicCard basic={basic} key={index} dropdown={dropdown} />
        ))}
      </div>
    </div>
  );
};

export default BasicsDropdown