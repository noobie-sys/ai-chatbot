"use client"; // Indicates this code runs on client-side only
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// Custom hook for handling user sign-in functionality
const UseSignIn = () => {
  // Initialize Next.js router for navigation
  const router = useRouter();

  // State to track loading status during sign-in process
  const [loading, setLoading] = useState<boolean>(false);

  // Get Clerk authentication utilities
  const { signIn, isLoaded, setActive } = useSignIn();

  // Initialize form handling with Zod schema validation
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema), // Use Zod schema for form validation
    mode: "onChange", // Validate form on input change
  });

  // Handle form submission
  const onHandleSubmit = methods.handleSubmit(
    async (values: UserLoginProps) => {
      // Check if Clerk is loaded before proceeding
      if (!isLoaded) return;

      try {
        setLoading(true);
        // Attempt to create a new sign-in session
        const authenticated = await signIn.create({
          identifier: values.email, // User's email
          password: values.password, // User's password
        });

        // If authentication is successful
        if (authenticated.status == "complete") {
          // Set the active session
          await setActive({ session: authenticated.createdSessionId });

          // Show success message
          toast("success", {
            description: "Welcome back !",
          });

          // Redirect to dashboard
          router.push("/dashboard");
        }
      } catch (error: any) {
        setLoading(false);
        console.log("🔴", error.errors[0].code);

        // Handle incorrect password error
        if (error.errors[0].code === "form_password_incorrect")
          toast("error", {
            description: "emai or password is incorrect",
          });
      }
    }
  );

  // Return hook utilities
  return {
    onHandleSubmit, // Form submission handler
    methods, // Form methods from react-hook-form
    loading, // Loading state
  };
};

export default UseSignIn;
