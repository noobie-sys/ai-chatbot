"use client";
import Loader from "@/components/loader";
import { AuthContextProvider } from "@/contexts/use-auth-context";
import { useSignUpForm } from "@/hooks/sign-up/use-sign-up";
import React from "react";
import { FormProvider, appendErrors } from "react-hook-form";

const SignUpFormProvider = ({ children }: { children: React.ReactNode }) => {
  const { methods, loading, onGenrateOTP, onHandelSubmit } = useSignUpForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form action="" className="h-full" onSubmit={onHandelSubmit}>
          <div className="flex flex-col justify-between h-full gap-3 ">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignUpFormProvider;
