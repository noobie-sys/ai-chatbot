import FormGenerator from "@/components/form-generator";
import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React, { useState, useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = ({
  register,
  errors,
  control,
}: Props & { control: any }) => {
  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  // Password validation checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  // Calculate password strength
  const strengthScore = [
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  // Determine strength label and color
  let strengthLabel = "Weak";
  let strengthColor = "bg-red-500";

  if (strengthScore >= 5) {
    strengthLabel = "Strong";
    strengthColor = "bg-green-500";
  } else if (strengthScore >= 3) {
    strengthLabel = "Medium";
    strengthColor = "bg-yellow-500";
  }

  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Account Details</h2>
      <p className="text-iridium md:text-sm">Enter your email and password</p>

      {USER_REGISTRATION_FORM.map((field) => {
        return (
          <FormGenerator
            key={field.id}
            {...field}
            register={register}
            errors={errors}
            name={field.name}
          />
        );
      })}

      {/* Password requirements indicator */}
      {password.length > 0 && (
        <div className="mt-2 text-xs space-y-2 px-1 bg-gray-50 p-3 rounded-md border border-gray-200">
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Password strength:</p>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium ${
                  strengthScore >= 5
                    ? "text-green-600"
                    : strengthScore >= 3
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {strengthLabel}
              </span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${strengthColor} transition-all duration-300`}
                  style={{ width: `${(strengthScore / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <p className="font-medium text-gray-700">Requirements:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <RequirementItem
              text="At least 8 characters"
              isMet={hasMinLength}
            />
            <RequirementItem text="One uppercase letter" isMet={hasUppercase} />
            <RequirementItem text="One lowercase letter" isMet={hasLowercase} />
            <RequirementItem text="One number" isMet={hasNumber} />
            <RequirementItem
              text="One special character"
              isMet={hasSpecialChar}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Helper component for requirement items
const RequirementItem = ({ text, isMet }: { text: string; isMet: boolean }) => (
  <div className="flex items-center gap-1.5">
    {isMet ? (
      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
    ) : (
      <XCircle className="h-3.5 w-3.5 text-red-400" />
    )}
    <span className={isMet ? "text-green-600" : "text-red-500"}>{text}</span>
  </div>
);

export default AccountDetailsForm;
