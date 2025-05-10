"use client";
import { USER_LOGIN_FORM } from "@/constants/forms";
import React from "react";
import LoginFormGenerator from "./login-form-generator";
import { useFormContext } from "react-hook-form";

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Account Details</h2>
      <p className="text-iridium md:text-sm font-medium">
        Enter your email and password
      </p>

      {USER_LOGIN_FORM.map((field) => {
        return (
          <LoginFormGenerator
            {...field}
            name={field.name}
            key={field.id}
            register={register}
            errors={errors}
          />
        );
      })}
    </>
  );
};

export default LoginForm;
