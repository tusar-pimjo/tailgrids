"use client";

import OtpInput from "@/registry/core/otp-input";

export default function OtpInputDefaultPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput
        label="4-Digit Code"
        hint="Try typing or pasting a 4-digit number."
      />
    </div>
  );
}
