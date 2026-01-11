import { cn } from "@/lib/cn";
import Link from "next/link";
import { MenuItem } from "./menuData";

interface ComponentsDropdownProps {
  menuItem: MenuItem;
  isOpen?: boolean;
}

export default function ComponentsDropdown(props: ComponentsDropdownProps) {
  return (
    <div
      className={cn(
        "relative top-full left-0 grid gap-4 rounded-20 border-tg-border-1 bg-white transition-all duration-200 max-lg:py-3 md:grid-cols-2 lg:absolute lg:w-[704px] lg:border lg:p-2 lg:shadow-lg",
        props.isOpen
          ? "lg:visible lg:opacity-100"
          : "lg:invisible lg:opacity-0",
      )}
    >
      <div className="absolute top-2 left-1/2 h-[calc(100%-16px)] w-px -translate-x-1/2 bg-tg-border-1 max-md:hidden" />

      {props.menuItem.children?.map((item, index) => (
        <Link
          href={item.path || "#"}
          key={index}
          className="flex gap-3 rounded-[14px] p-4 duration-200 hover:bg-gray-100"
        >
          <div className="text-tg-text-color-tertiary">{item.icon}</div>
          <div>
            <span className="mb-1 block text-base font-medium -tracking-[.2px] text-tg-title-color">
              {item.title}
            </span>
            <span className="block text-sm -tracking-[.2px] text-tg-text-color-secondary">
              {item.desc}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
