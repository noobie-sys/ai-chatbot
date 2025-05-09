"use client";
import {
  UserRegistertionProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schemas";
// Import necessary dependencies for authentication, routing, and form handling
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { onCompleteUserregistration } from "@/actions /auth";

export function useSignUpForm() {
  // Initialize Clerk's sign-up hook and get necessary utilities
  const { signUp, isLoaded, setActive } = useSignUp();
  // State to track loading status during sign-up process
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Initialize react-hook-form with zod schema validation
  const methods = useForm<UserRegistertionProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: "owner", // Set default user type as owner
    },
    mode: "onChange", // Validate form on change
  });

  // Function to generate and send OTP for email verification
  const onGenrateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    alert("Running!");
    if (!isLoaded) return;
    try {
      alert("Running!");
      // Create sign-up session with email and password
      await signUp.create({
        emailAddress: email,
        password,
        redirectUrl: window.location.href,
      });

      //   console.log(user);

      // Prepare email verification with OTP strategy
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      onNext((prev) => prev + 1); // Move to next step in sign-up flow
      //   toast(user.emailAddress); // Display user
      alert("Running! 2");
    } catch (error: Error | any) {
      // Handle and display any errors during OTP generation
      toast.error(error.message, {
        description: error.errors[0].longMessage,
      });
    }
  };

  // Function to handle form submission and complete registration
  const onHandelSubmit = methods.handleSubmit(
    async (value: UserRegistertionProps) => {
      if (!isLoaded) return;
      try {
        setLoading(true);
        // Verify email with provided OTP code
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: value.otp,
        });

        // Handle unsuccessful verification
        if (completeSignUp.status !== "complete") {
          return { message: "something went wrong" };
        }

        // Handle successful verification
        if (completeSignUp.status === "complete") {
          if (!signUp.createdUserId) return;
          // Complete user registration with additional details
          const registerd = await onCompleteUserregistration(
            value.fullname,
            signUp.createdUserId,
            value.type
          );

          // Handle successful registration
          if (registerd?.status === 200 && registerd.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            setLoading(false);
            router.push("/dashboard"); // Redirect to dashboard
          }

          // Handle registration error
          if (registerd?.status === 400) {
            toast.error("Error", {
              description: "something went wrong",
            });
          }
        }
      } catch (error: Error | any) {
        // Handle and display any errors during submission
        toast.error(error.message, {
          description: error.errors[0].longMessage,
        });
        setLoading(false);
      }
    }
  );

  // Return hook utilities and methods
  return {
    methods,
    onHandelSubmit,
    onGenrateOTP,
    loading,
  };
}
