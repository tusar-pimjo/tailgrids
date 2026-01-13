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
    url: "/docs/changelog",
    external: false,
  },
  {
    title: "Roadmap",
    url: "/docs/roadmap",
    external: false,
  },
  {
    title: "Tailwind UI Components",
    url: "/components",
    external: false,
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    external: true,
  },
  {
    title: "Tailgrids - Tailwind Figma",
    url: "https://www.figma.com/community/file/1022464084572022420",
    external: true,
  },
];

export const usefulLinks: FooterLinkItemType[] = [
  {
    title: "License",
    url: "/license",
    external: false,
  },
  {
    title: "Privacy Policy",
    url: "/privacy",
    external: false,
  },
  {
    title: "Refund Policy",
    url: "/refund",
    external: false,
  },
  {
    title: "Free Download",
    url: "/download",
    external: false,
  },
  {
    title: "NPM Package",
    url: "https://www.npmjs.com/package/tailgrids",
    external: true,
  },
];

export const helpAndSupportLinks: FooterLinkItemType[] = [
  {
    title: "Support",
    url: "/support",
    external: false,
  },
  {
    title: "Docs",
    url: "/docs",
    external: false,
  },
  {
    title: "FAQs",
    url: "/pricing#faqs",
    external: false,
  },
  {
    title: "Community",
    url: "/community",
    external: false,
  },
];

export const socialsLinks: SocialLinkType[] = [
  {
    title: "X",
    url: "https://x.com/tailgrids",
    external: true,
    icon: <XIcon className="size-4.5" />,
  },
  {
    title: "Github",
    url: "https://github.com/TailGrids",
    external: true,
    icon: <GithubIcon className="size-4.5" />,
  },
  {
    title: "Discord",
    url: "https://www.discord.com/",
    external: true,
    icon: <DiscordIcon className="size-4.5" />,
  },
];
