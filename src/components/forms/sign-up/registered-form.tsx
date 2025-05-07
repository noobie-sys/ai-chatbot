"use client";
import { useAuthContextHook } from "@/contexts/use-auth-context";
import React from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";

type Props = {};

export const RegisteredFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOtp, setOnOtp] = React.useState<string>("");
  const [onUserType, setOnUserType] = React.useState<"owner" | "student">(
    "owner"
  );
  setValue("otp", onOtp);
  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
    case 3:
  }
};
