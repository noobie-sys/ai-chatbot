"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  register,
  setUserType,
  value,
  title,
  text,
  userType,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType === value && "border-orange-400"
        )}
      >
        <CardContent className="flex justify-between ">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-2",
                userType == value && "border-orange-400"
              )}
            >
              <User
                size={30}
                className={cn(
                  userType == value ? "text-orange-400" : "text-gray-400"
                )}
              />
            </Card>
            <div>
              <CardDescription className="font-bold text-black">
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  "font-light",
                  userType == value ? "text-orange-400" : "text-gray-400"
                )}
              >
                {text}
              </CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                "w-4 h-4 rounded-full",
                userType == value ? "bg-peach" : "bg-transparent"
              )}
            >
              <Input
                {...register("type", {
                  onChange: (e) => {
                    setUserType(e.target.value);
                  },
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
