import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className={`px-16 flex h-16 w-full`}>
        <div className="flex items-center gap-2 w-full justify-between">
          <div className="relative flex justify-center items-center gap-1 font-bold tracking-wider">
            <Image src={"/images/logo.png"} alt="Logo" width={36} height={36} />
            <span>Cornnia AI</span>
          </div>
          <ul className="hidden gap-10 justify-between self-stretch my-auto leading-5 max-md:flex-wrap max-md:max-w-full font-normal md:flex">
            {["Pricing", "Features", "About us"].map((item) => (
              <li
                key={item}
                className="text cursor-pointer text-500 relative group text-sm font-medium pb-[2x]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link href={"/auth/sign-in"} className="cursor-pointer">
              <Button size={"sm"}>Sign In</Button>
            </Link>
            <Link href={"/auth/sign-up"} className="cursor-pointer">
              <Button size={"sm"} variant={"outline"}>
                Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
