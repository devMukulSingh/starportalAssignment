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
    <figure
      className="
    rounded-xl
    sm:h-[20rem]
    sm:w-[15rem]
    h-[14rem]
    w-[9rem]
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
        text-lg
        sm:text-xl">
        {creator.title}
      </h1>
    </figure>
  );
};

export default CreatorCard;
