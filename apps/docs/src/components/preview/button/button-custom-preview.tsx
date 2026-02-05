import { Button } from "@/registry/core/button";
import { RefreshCircle1Clockwise } from "@tailgrids/icons";

export default function ButtonCustomPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>
        <RefreshCircle1Clockwise className="animate-spin" />
        Saving...
      </Button>

      <Button className="bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500/20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        Custom Design
      </Button>
    </div>
  );
}
