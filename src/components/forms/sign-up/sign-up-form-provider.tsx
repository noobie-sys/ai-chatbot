import { AuthContextProvider } from "@/contexts/use-auth-context";
import React from "react";

const SignUpFormProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default SignUpFormProvider;
