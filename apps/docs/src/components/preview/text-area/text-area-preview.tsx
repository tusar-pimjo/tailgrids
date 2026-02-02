import { TextArea } from "@/registry/core/text-area";

export default function TextAreaPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea label="Message" placeholder="Write something..." />
    </div>
  );
}
