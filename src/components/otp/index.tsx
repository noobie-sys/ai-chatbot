import React from "react";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  otp: string;
};

const OTPInput = ({ setOTP, otp }: Props) => {
  return (
    <InputOTP value={otp} onChange={(otp) => setOTP(otp)} maxLength={6}>
      <div>
        <InputOTPSlot index={0} />
      </div>
      <div>
        <InputOTPSlot index={1} />
      </div>
      <div>
        <InputOTPSlot index={2} />
      </div>
      <div>
        <InputOTPSlot index={3} />
      </div>
      <div>
        <InputOTPSlot index={4} />
      </div>
      <div>
        <InputOTPSlot index={5} />
      </div>
    </InputOTP>
  );
};

export default OTPInput;
