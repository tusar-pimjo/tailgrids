import { TextArea } from "@/registry/core/text-area";

export default function TextAreaRowsPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea
        label="Detailed Description"
        rows={6}
        placeholder="Type your detailed description here..."
      />
    </div>
  );
}
