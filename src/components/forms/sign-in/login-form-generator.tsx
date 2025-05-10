import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  type: "email" | "password" | "text";
  inputType: "input" | "select" | "textarea";
  label?: string | undefined;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
};

const LoginFormGenerator = ({
  type,
  inputType,
  label,
  placeholder,
  name,
  register,
  errors,
}: Props) => {
  switch (inputType) {
    case "input":
      return (
        <Label htmlFor={`input-${label}`} className="flex flex-col gap-2">
          {label && label}
          <Input
            id={`input-${Math.random()}`}
            type={type}
            placeholder={placeholder}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 text-xs tracking-tight text-start ml-1 w-full">
                {message === "required" ? " " : message}
              </p>
            )}
          />
        </Label>
      );
  }
  //   return <div>LoginFormGenerator</div>;
};

export default LoginFormGenerator;
