import { TextArea } from "@/registry/core/text-area";

export default function TextAreaDisabledPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea label="Notes" disabled placeholder="Disabled textarea..." />
    </div>
  );
}
