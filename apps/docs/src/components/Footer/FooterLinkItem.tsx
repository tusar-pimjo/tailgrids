import Link from "next/link";
import { FooterLinkItemType } from "./footerData";

type FooterLinkItemProps = {
  link: FooterLinkItemType;
};

export default function FooterLinkItem({ link }: FooterLinkItemProps) {
  return (
    <Link
      href={link.url}
      target={link.external ? "_blank" : "_self"}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="inline-flex cursor-pointer text-base text-tg-text-color duration-200 hover:text-tg-title-color"
    >
      {link.title}
    </Link>
  );
}
