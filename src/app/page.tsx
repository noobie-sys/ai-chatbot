"use client";
import { Button } from "@/components/ui/button";
import { SignedOut, SignOutButton, useClerk } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import { Check, SparkleIcon } from "lucide-react";
import { pricingCard } from "@/constants/pricing-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    console.log("Signing out...");
    // Perform any additional sign-out logic here
    // For example, you can clear user data or perform other cleanup tasks
    // Then, call the signOut function from Clerk to initiate the sign-out process
    // This will redirect the user to the sign-in page after successful sign-out
    const success = await signOut();

    if (success!) {
      redirect("/auth/sign-up");
    }
  };

  return (
    <main className="">
      <Navbar />
      <section className="flex items-center justify-center flex-col mt-[80px] gap-4">
        <span className="text-orange bg-orange/20 py-2 rounded-full text-xs px-4 font-semibold flex items-center gap-1">
          <SparkleIcon className="h-4 w-4 animate-pulse" /> An AI powered Sales
          assistant chatbot
        </span>
        <Image
          src={"/images/header-image.png"}
          alt="Header Image"
          width={1000}
          height={200}
          className="max-w-lg object-contain"
        />
        <p className="text-center max-w-[500px]">
          Your AI powered sales assistant! Embed Corinna AI into any website
          with just a snippet of code!
        </p>
        <Button className="bg-orange font-bold text-white px-4 hover:bg-orange/80">
          Start for free
        </Button>
        <Image
          src={"/svgs/Frame.svg"}
          alt="Header Image"
          width={400}
          height={100}
          className="object-contain mt-4"
        />
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-5xl text-center font-bold">
          {" "}
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center max-w-lg font-medium text-sm tracking-normal">
          Our Straightforward pricing plans are tailored to meet your needs. If
          you&apos;re not ready to commit you can get started for free
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCard.map((card) => {
          return (
            <Card
              key={card.title}
              className={cn(
                "w-[300px] flex flex-col justify-between",
                card.title === "Unlimited" && "border-2 border-primary"
              )}
            >
              <CardHeader>
                <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold ">{card.price}</span>
                <span className="text-muted-foreground">
                  <span className="text-sm">/ month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <div>
                  {card.features.map((feature) => {
                    return (
                      <div key={feature} className="flex gap-3">
                        <Check className="h-4 w-4 text-orange" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href={`/agency?plan=${card.title}`}
                  className="w-full mt-12 border-orange font-bold"
                >
                  <Button
                    className="w-full bg-orange text-white hover:bg-orange/80"
                    size={"sm"}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
