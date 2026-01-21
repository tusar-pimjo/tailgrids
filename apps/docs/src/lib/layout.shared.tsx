import { BlocksIcon, ComponentsIcon, FigmaIcon, TemplateIcon } from "@/icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import ProBadge from "@/components/pro-badge";
import ThemeToggleLink from "@/components/theme-toggle-link";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: false // Disable default navbar since we have custom global header
    },
    links: [
      {
        text: "Base Components",
        url: "/",
        icon: <ComponentsIcon className="size-6 shrink-0 " />,
        active: "nested-url"
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Pro Blocks
            <ProBadge />
          </span>
        ),
        url: "https://staging.tailgrids.com/blocks",
        icon: <BlocksIcon className="size-6 shrink-0" />,
        external: false
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Templates
            <ProBadge />
          </span>
        ),
        url: "https://staging.tailgrids.com/templates",
        icon: <TemplateIcon className="size-6 shrink-0" />,
        external: false
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Figma File
            <ProBadge />
          </span>
        ),
        icon: <FigmaIcon className="size-6 shrink-0" />,
        url: "https://staging.tailgrids.com/figma",
        external: false
      }
    ],
    children: "WHat the hell?"
  };
}

export { ThemeToggleLink };
