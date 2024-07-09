import Image from "next/image";
import React from "react";

type Props = {
  creator: {
    title: string;
    image: string;
  };
};

const CreatorCard = ({ creator }: Props) => {
  return (
    <div
      className="
    rounded-xl
    h-[25rem]
    w-[18rem]
    relative
    "
    >
      <Image
        className="object-cover rounded-xl" 
        src={creator.image} alt="creator" fill />
      <h1 className="
        text-center
        absolute 
        font-medium 
        bottom-5 
        text-white 
        text-xl">
        {creator.title}
      </h1>
    </div>
  );
};

export default CreatorCard;
