"use client";

import OtpInput from "@/registry/core/otp-input";
import { useState } from "react";

export default function OtpInputControlledPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <OtpInput
        label="Controlled Value"
        value={value}
        onChange={e => setValue(e.target.value)}
        hint={`Current value: ${value || "—"}`}
      />
    </div>
  );
}
