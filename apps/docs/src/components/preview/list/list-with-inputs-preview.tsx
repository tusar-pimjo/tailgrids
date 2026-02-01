import { Checkbox } from "@/registry/core/checkbox";
import { List } from "@/registry/core/list";

export default function ListWithInputsPreview() {
  const features = [
    "Complete documentation work.",
    "Add new template to TailAdmin.",
    "Try to make Meku.dev featureful",
    "Review Sera UI pr's",
    "Review TailAdmin pr's"
  ];

  return (
    <div className="flex gap-6 w-full justify-center">
      {/* Checkbox List */}
      <List className="max-w-70">
        {features.map((feature, index) => (
          <li key={index} className="gap-2">
            <Checkbox />
            <label className="cursor-pointer">{feature}</label>
          </li>
        ))}
      </List>

      {/* Radio List */}
      <List className="max-w-70">
        {features.map((feature, index) => (
          <li key={index} className="gap-2">
            <input
              type="radio"
              name="radio-list"
              className="size-4 accent-primary-500"
            />
            <label className="cursor-pointer">{feature}</label>
          </li>
        ))}
      </List>
    </div>
  );
}
