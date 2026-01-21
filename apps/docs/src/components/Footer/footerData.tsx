import { JSX } from "react";
import { DiscordIcon, GithubIcon, XIcon } from "../ui/icons";

export interface FooterLinkItemType {
  title: string;
  url: string;
  external?: boolean;
}

export interface SocialLinkType extends FooterLinkItemType {
  icon: JSX.Element;
}

export const resourceLinks: FooterLinkItemType[] = [
  {
    title: "Update Logs",
    url: "/changelog",
    external: false
  },
  {
    title: "Roadmap",
    url: "https://staging.tailgrids.com/roadmap",
    external: false
  },
  {
    title: "Tailgrids Blocks",
    url: "https://staging.tailgrids.com/blocks",
    external: false
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    external: true
  },
  {
    title: "Tailgrids - Tailwind Figma",
    url: "https://staging.tailgrids.com/figma",
    external: false
  }
];

export const usefulLinks: FooterLinkItemType[] = [
  {
    title: "License",
    url: "https://staging.tailgrids.com/license",
    external: false
  },
  {
    title: "Privacy Policy",
    url: "https://staging.tailgrids.com/privacy",
    external: true
  },
  {
    title: "Refund Policy",
    url: "https://staging.tailgrids.com/refund",
    external: true
  },
  {
    title: "Download",
    url: "https://staging.tailgrids.com/pricing",
    external: false
  },
  {
    title: "NPM Package",
    url: "https://www.npmjs.com/package/tailgrids",
    external: true
  }
];

export const helpAndSupportLinks: FooterLinkItemType[] = [
  {
    title: "Support",
    url: "/support",
    external: false
  },
  {
    title: "Docs",
    url: "/docs",
    external: false
  },
  {
    title: "FAQs",
    url: "https://staging.tailgrids.com/pricing#faqs",
    external: false
  },
  {
    title: "Community",
    url: "https://pimjo.com/community",
    external: true
  }
];

export const socialsLinks: SocialLinkType[] = [
  {
    title: "X",
    url: "https://x.com/tailgrids",
    external: true,
    icon: <XIcon className="size-4.5" />
  },
  {
    title: "Github",
    url: "https://github.com/TailGrids",
    external: true,
    icon: <GithubIcon className="size-4.5" />
  },
  {
    title: "Discord",
    url: "https://www.discord.com/",
    external: true,
    icon: <DiscordIcon className="size-4.5" />
  }
];
