import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div>
      <div
        className="
        h-screen
        w-full
        absolute
        flex
        flex-col
        justify-center
        items-center
        gap-10
        z-30
        sm:p-0
        p-5
      "
      >
        <Image
          className="bg-transparent"
          src={"/animated-logo.gif"}
          alt="logo-animated"
          height={250}
          width={250}
        />
        <h1 className="text-lg text-neutral-500 text-center">
          <span className="text-neutral-200">Intract users </span>have together
          made more than
          <span className="text-neutral-200"> $100 million </span>
          in web3. <br />
          Join them and
          <span className="text-neutral-200"> learn how to earn crypto!</span>
        </h1>
        <Button
          className="
          bg-[#6E3FEB]
          hover:pl-12
          w-[14rem]
          hover:bg-[#6E3FEB]
          transition-all
          px-10
          "
        >
          Get Started
          <ArrowRight className="ml-2" />
        </Button>
      </div>
     
      <figure
        className="
        w-full
        h-screen
        relative
      "
      >
        <Image src={"/bg-image.png"} fill alt="bg-image" className="object-cover" />
      </figure>
    </div>
  );
}

export default HomeSection