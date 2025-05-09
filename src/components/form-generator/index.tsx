import UserRegistertionProps from "@/components/form-generator";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type Props = {
  type: "text" | "email" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
};

const FormGenerator = ({
  type,
  inputType,
  options,
  label,
  placeholder,
  register,
  errors,
  lines,
  form,
  name,
}: Props) => {
  switch (inputType) {
    case "input":
      return (
        <Label htmlFor={`input-${label}`} className="flex flex-col gap-2">
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
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
    // case "select":
    //   return (
    //     <Label>
    //       <select form={form} {...register(name)} id={`label-${Label}`}>
    //         {options?.length &&
    //           options.map((option) => (
    //             <option value={option.value} key={option.id}>
    //               {option.label}
    //             </option>
    //           ))}
    //       </select>
    //       <ErrorMessage
    //         errors={errors}
    //         name={name}
    //         render={({ message }) => (
    //           <p className="text-red-400 mt-2">
    //             {message === "Required" ? " " : message}
    //           </p>
    //         )}
    //       />
    //     </Label>
    //   );
    // case "textarea":
    //   return (
    //     <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
    //       {label && label}
    //       <Textarea
    //         form={form}
    //         id={`input-${label}`}
    //         placeholder={placeholder}
    //         {...register(name)}
    //         rows={lines}
    //         defaultValue={defaultValue}
    //       />
    //       <ErrorMessage
    //         errors={errors}
    //         name={name}
    //         render={({ message }) => (
    //           <p className="text-red-400 mt-2">
    //             {message === "Required" ? "" : message}
    //           </p>
    //         )}
    //       />
    //     </Label>
    //   );
  }
  //   return <div>FormGenerator</div>;
};

export default FormGenerator;
