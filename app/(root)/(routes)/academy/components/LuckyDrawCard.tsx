import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CheckCircle2, CheckCircle2Icon, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";

const LuckyDrawCard = () => {
    const tasks = [
      {
        title: "Complete all Essential quests ",
      },
      {
        title:"Complete at least 1 Alpha Hub quest today"
      }
    ];
  return (
    <div
      className="
    flex 
    flex-col
    gap-4
    max-w-[20rem]
    "
    >
      {/* //Clock */}
      <div
        className="flex
        flex-col 
        gap-5
        rounded-xl
        p-3
        bg-neutral-900
        "
      >
        <div className="flex gap-2">
          <Clock />
          <h1>Rewards unlocks in</h1>
        </div>
        <hr className="bg-neutral-500" />
        <div
          className="
                rounded-md
                p-4
                h-20
                bg-neutral-950
            "
        ></div>
      </div>

      {/* gif */}
      <div
        className="
            text-sm
            bg-neutral-900
            flex
            flex-col
            gap-3
            w-full
            p-3
            rounded-xl
        "
      >
        <Image
          className="object-cover"
          src={"/lucky-draw.gif"}
          alt="lucky-draw"
          height={300}
          width={300}
        />
        <div
          className="
                items-center
                flex
                justify-between
            "
        >
          <h1>Exclusive Community</h1>
          <h1 className="flex items-center text-white ">
            <BsDiscord className="mr-2" />
            Earndrop
          </h1>
        </div>
        <hr className="border border-dashed" />

        <div className="flex flex-col gap-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="
                flex
                justify-between
                "
            >
              <h1 className="text-sm">{task.title}</h1>
              <BiCheckCircle size={20} />
            </div>
          ))}
        </div>

        <Button variant={"custom"}>
          Claim Now
          <ArrowRight className="ml-2" />
        </Button>
      </div>
   
    </div>
  );
};

export default LuckyDrawCard;
