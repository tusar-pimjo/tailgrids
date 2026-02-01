"use client";

import OtpInput from "@/registry/core/otp-input";

export default function OtpInputCustomPreview() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
          Secure Login
        </h3>
        <OtpInput
          className="[&>input]:border-blue-200 [&>input]:focus:border-blue-500 [&>input]:bg-white dark:[&>input]:bg-gray-800"
          digitLength={4}
          hint="Enter the code sent to your device"
        />
      </div>
    </div>
  );
}
