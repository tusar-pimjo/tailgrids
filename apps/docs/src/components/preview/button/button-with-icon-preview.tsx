import { Button } from "@/registry/core/button";
import { Download1, Plus } from "@tailgrids/icons";

export default function ButtonWithIconPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Plus />
        Add Item
      </Button>

      <Button iconOnly>
        <Download1 />
      </Button>
    </div>
  );
}
