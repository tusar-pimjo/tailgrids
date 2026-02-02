import { TextArea } from "@/registry/core/text-area";

export default function TextAreaStatesPreview() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <TextArea
        label="Feedback"
        state="error"
        hint="Feedback cannot be empty."
        placeholder="Enter feedback..."
      />
      <TextArea
        label="Description"
        state="success"
        hint="Looks good!"
        placeholder="Enter a short description..."
      />
    </div>
  );
}
