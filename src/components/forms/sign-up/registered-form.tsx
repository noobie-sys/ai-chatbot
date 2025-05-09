"use client";
import { useAuthContextHook } from "@/contexts/use-auth-context";
import React from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";
import dynamic from "next/dynamic";
import Loader from "@/components/loader";
import { LoaderIcon } from "lucide-react";

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: () => <LoaderIcon className="animate-spin h-10 w-10" />,
});

const OTPForm = dynamic(() => import("./otp-form"), {
  ssr: false,
  loading: () => <LoaderIcon className="animate-spin h-10 w-10" />,
});

type Props = {};

export const RegisteredFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
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
      return (
        <DetailForm register={register} errors={errors} control={control} />
      );
    case 3:
      return <OTPForm onOTP={onOtp} setOTP={setOnOtp} />;
  }
};
