import { RegisteredFormStep } from "@/components/forms/sign-up/registered-form";
import SignUpFormProvider from "@/components/forms/sign-up/sign-up-form-provider";
import React from "react";

const SignIn = () => {
  return (
    <SignUpFormProvider>
      <div className="flex flex-col gap-3">
        <RegisteredFormStep />
      </div>
    </SignUpFormProvider>
  );
};

export default SignIn;
