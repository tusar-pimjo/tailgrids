"use client";

import Alert from "@/registry/core/alert";
import { CheckCircle1, InfoTriangle } from "@tailgrids/icons";
import { InfoCircleIcon } from "../ui/icons";

export function AlertPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="success"
        title="Success"
        message="Your changes have been saved successfully."
        icon={<CheckCircle1 />}
      />

      <Alert
        variant="info"
        message="A new software update is available. See what's new."
        icon={<InfoCircleIcon />}
      />

      <Alert
        variant="warning"
        title="Warning"
        message="Your subscription will expire in 3 days. Please renew to continue."
        icon={<InfoTriangle />}
      />

      <Alert
        variant="danger"
        title="Error"
        message="There was a problem processing your request. Please try again."
        actions={{
          primary: {
            label: "Retry",
            onClick: () => console.log("Retrying...")
          },
          secondary: {
            label: "Cancel"
          }
        }}
      />
    </div>
  );
}
