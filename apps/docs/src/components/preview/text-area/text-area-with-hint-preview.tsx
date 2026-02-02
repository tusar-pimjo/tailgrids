import { TextArea } from "@/registry/core/text-area";

export default function TextAreaWithHintPreview() {
  return (
    <div className="w-full max-w-md">
      <TextArea
        label="Bio"
        hint="Tell us a little about yourself."
        placeholder="Your bio..."
      />
    </div>
  );
}
