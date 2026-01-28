import { Button } from "@/registry/core/button";

export default function ButtonAppearancesPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button appearance="fill">Filled</Button>
      <Button appearance="outline">Outline</Button>
    </div>
  );
}
