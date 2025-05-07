import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full  justify-center">
      <div className="w-[600px] lg:w-full flex  flex-col items-start p-6">
        <div className="flex items-center gap-1  justify-center font-medium tracking-wider">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            sizes="100vw"
            width={40}
            height={40}
          />
          <span>Cornnia AI</span>
        </div>
        {children}
      </div>
      <div className="hidden lg:flex w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I&apos;m your AI powered assistant, Corinna!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Corinna is capable of capturing lead information without a form...{""}
          <br /> something never done before.
        </p>
        <Image
          src="/images/app-ui.png"
          alt="AI"
          loading="lazy"
          sizes="30"
          width={0}
          height={0}
          className="absolute shrink-0 w-[1600px]! top-48 rounded-xl"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
