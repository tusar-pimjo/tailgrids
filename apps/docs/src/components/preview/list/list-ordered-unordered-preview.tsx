import { List } from "@/registry/core/list";

export default function ListOrderedUnorderedPreview() {
  const features = [
    "Complete documentation work.",
    "Add new template to TailAdmin.",
    "Try to make Meku.dev featureful",
    "Review Sera UI pr's",
    "Review TailAdmin pr's"
  ];

  return (
    <div className="flex gap-6 w-full justify-center">
      {/* Unordered List */}
      <List className="list-disc list-inside [&>li]:list-item max-w-65">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </List>

      {/* Ordered List */}
      <List className="list-decimal list-inside [&>li]:list-item max-w-65">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </List>
    </div>
  );
}
