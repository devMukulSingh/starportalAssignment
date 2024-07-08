import Link from "next/link";
import React from "react";
import { BsDiscord, BsSpotify, BsTelegram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const socialLinks = [
      {
        icon: BsTwitter,
        href: "",
      },
      {
        icon: BsDiscord,
        href: "",
      },
      {
        icon: BsTelegram,
        href: "",
      },
      {
        icon: BsSpotify,
        href: "",
      },
    ];
  const quickLinks = [
    {
      href: "",
      title: "Explore Quests",
    },
    {
      href: "",
      title: "Comunities",
    },
    ,
    {
      href: "",
      title: "Alpha Hub",
    },
  ];
  const earnLinks = [
    {
      href: "",
      title: "Refer & Earn",
    },
    {
      href: "",
      title: "Leaderboard",
    },
    {
      href: "",
      title: "Achievements",
    },
  ];
  const aboutLinks = [
    {
      href: "Product Raodmap",
      title: "",
    },
    {
      href: "",
      title: "Affiliate Program",
    },
    {
      href: "",
      title: "Sign up Program",
    },
    {
      href: "",
      title: "Growth Community",
    },
    {
      href: "",
      title: "Blogs",
    },
  ];
  const supportLinks = [
    {
      href: "",
      title: "Help Center",
    },
    {
      href: "",
      title: "Create your quest",
    },
    {
      href: "",
      title: "Terms of Service",
    },
    {
      href: "",
      title: "Privacy Policy",
    },
    {
      href: "",
      title: "Community Guidelines",
    },
  ];
  return (
    <div className="flex border w-full flex-col min-h-screen justify-end items-center">
      {/* <hr className='w-full'/> */}
      <div className="flex md:px-0 px-10 py-10 gap-10  flex-col md:w-5/6 w-full text-sm">
        <div
          className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        lg:grid-cols-6 
        md:grid-cols-3 
        gap-5
        "
        >
          <div className="space-y-3 sm:col-span-2 lg:px-10 px-0">
            <h1 className="font-medium text-2xl text-white">intract.</h1>
            <h1 className="text-neutral-500">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </h1>
          </div>

          <div className="flex flex-col gap-3 ">
            <h1 className="font-medium text-white">INTRACT</h1>

            {quickLinks.map((link, index) => (
              <Link
                className="whitespace-nowrap"
                key={index}
                href={link?.href || ""}
              >
                {link?.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-white">EARN</h1>
            {earnLinks.map((link, index) => (
              <Link className="whitespace-nowrap" key={index} href={link.href}>
                {link?.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-white">ABOUT</h1>
            {aboutLinks.map((link, index) => (
              <Link className="whitespace-nowrap" key={index} href={link.href}>
                {link?.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-white">SUPPORT</h1>
            {supportLinks.map((link, index) => (
              <Link className="whitespace-nowrap" key={index} href={link.href}>
                {link?.title}
              </Link>
            ))}
          </div>
        </div>

        <hr className="w-full" />

        <div className="flex">
          <h1>
            <span className="text-neutral-300">Disclaimer:</span> Crypto
            Products, Virtual Digital Assets, and NFTs are unregulated and can
            be highly risky. There may be no regulatory recourse for any loss
            from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </h1>
        </div>

        <hr className="w-full" />

        <div className="flex justify-between items-center">
          <h1 className="text-md sm:text-lg font-medium">
            CREATED BY <span className="underline">INTRACT</span>
          </h1>
          <div className="flex gap-2">
            {
                socialLinks.map( (link,index) => (
                    <div key={index} className="p-2 rounded-md bg-neutral-900">
                        <link.icon size={20}/>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
