import ButtonHandler from "@/components/forms/sign-up/button-handler";
import HighLightBar from "@/components/forms/sign-up/high-light-bar";
import { RegisteredFormStep } from "@/components/forms/sign-up/registered-form";
import SignUpFormProvider from "@/components/forms/sign-up/sign-up-form-provider";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegisteredFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
