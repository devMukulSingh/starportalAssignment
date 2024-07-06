'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLinks = () => {
    const pathName = usePathname();
    console.log(pathName);
    
      const navLinks = [
        {
          title: "Compass",
          href: "/compass",
        },
        {
          title: "Explore",
          href: "/explore",
        },
        {
          title: "Academy",
          href: "/academy",
        },
        {
          title: "NFTs",
          href: "/nft",
        },
        {
          title: "For Projects",
          href: "/projects",
        },
      ];
    return (
    <div className="flex gap-8 items-center ">
      {navLinks.map((link, index) => (
        <Link
            className={
                `${pathName.endsWith(link.href)
                ?" text-white border-b-4 border-white border-" 
                : 'text-neutral-300'
                }
                `
            } 
            key={index} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks