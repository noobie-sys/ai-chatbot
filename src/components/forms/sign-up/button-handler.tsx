"use client";
import { useAuthContextHook } from "@/contexts/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import React from "react";
import { useFormContext } from "react-hook-form";

const ButtonHandler = () => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenrateOTP } = useSignUpForm();
  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  return <div>ButtonHandler</div>;
};

export default ButtonHandler;
