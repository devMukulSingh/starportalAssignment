import React from "react";
import CreatorCard from "./CreatorCard";

const TopCryptoCreators = () => {
  const cryptoCreators = [
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
      title: "How to plan your retirement with crypto?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
      title: "Why are there limited Bitcoin?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
      title: "How does Uniswap actually work?",
    },
    {
      image:
        "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
      title: "How to spot crypto projects to invest in?",
    },
  ];
  return (
    <div
      className="
    h-screen
    flex
    gap-5
    justify-center
    items-center
    "
    >
      <div className="flex md:w-5/6 w-full flex-col gap-10 justify-center items-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-white text-center">
            Top Crypto Creators and Projects to Follow
          </h1>
          <h1 className="text-sm text-center">
            Answers to your crypto doubts, straight from the experts
          </h1>
        </div>
        <div
          className="

            grid
            grid-cols-1
            lg:grid-cols-4
            md:grid-cols-2
            gap-5
            "
        >
          {cryptoCreators.map((creator, index) => (
            <CreatorCard creator={creator} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCryptoCreators;
