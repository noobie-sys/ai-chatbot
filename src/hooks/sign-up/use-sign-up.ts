import {
  UserRegistertionProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schemas";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

export function useSignUpForm() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<UserRegistertionProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner",
    },
    mode: "onChange",
  });
  const onGenrateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      onNext((prev) => prev + 1);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      toast.error(error.message, {
        description: error.errors[0].longMessage,
      });
    }
  };
  const onHandelSubmit = methods.handleSubmit(
    async (value: UserRegistertionProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: value.otp,
        });

        if (completeSignUp.status !== "complete") {
          return { message: "something went wrong" };
        }
        if (completeSignUp.status === "complete") {
          if (!signUp.createdUserId) return;
          const registerd = await onCompleteUserregistration(
            value.fullname,
            signUp.createdUserId,
            value.type
          );
          if (registerd?.status === 200 && registerd.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            setLoading(true);
            router.push("/dashboard");
          }
          if (registerd?.status === 400) {
            toast.error("Error", {
              description: "something went wrong",
            });
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: Error | any) {}
    }
  );
}
