"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialLinks from "../Footer/SocialLinks";
import { Button } from "../ui/Button";
import { CloseIcon, DownArrowIcon } from "../ui/icons";
import ComponentsDropdown from "./ComponentsDropdown";
import { menuData } from "./menuData";
import ProductsDropdown from "./ProductsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

interface MobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

export default function MobileMenu({
  showMobileMenu,
  setShowMobileMenu,
}: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (menuTitle: string) => {
    setOpenDropdown((prev) => (prev === menuTitle ? null : menuTitle));
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
      setOpenDropdown(null);
    }
  }, [showMobileMenu]);

  // Close mobile menu / sub-dropdowns on route change
  useEffect(() => {
    if (pathname) {
      setShowMobileMenu(false);
      setOpenDropdown(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className={cn(
        "invisible fixed inset-0 z-9999 flex h-svh w-screen flex-col justify-between bg-white opacity-0 duration-200 lg:hidden",
        {
          "visible opacity-100": showMobileMenu,
        },
      )}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/images/tailgrids-full-logo.svg"
              alt="Logo"
              width={142}
              height={42}
              quality={100}
            />
          </Link>
        </div>
        <div>
          <button onClick={() => setShowMobileMenu(false)}>
            <CloseIcon className="size-8 text-gray-800" />
          </button>
        </div>
      </div>
      <div className="flex h-[calc(100vh-80px)] flex-1 flex-col justify-between overflow-y-auto">
        <div className="px-6">
          <ul>
            {menuData.map((menuItem, index) => {
              return (
                <li
                  key={index}
                  className={cn(
                    "border-b border-dashed border-gray-300 py-4.5 first:pt-0 last:pb-0 last-of-type:border-b-0",
                    {
                      relative:
                        menuItem.children && menuItem.children.length > 0,
                    },
                  )}
                >
                  {menuItem?.path ? (
                    <Link
                      href={menuItem.path}
                      target={menuItem.external ? "_blank" : "_self"}
                      onClick={() => setShowMobileMenu(false)}
                      className="flex w-full items-center justify-between gap-0.5 rounded-lg py-1.5 text-sm font-medium text-tg-text-color duration-200 group-hover:bg-gray-100 group-hover:text-tg-title-color"
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(menuItem.title)}
                        className="flex w-full cursor-pointer items-center justify-between gap-0.5 rounded-lg py-1.5 text-sm font-medium text-tg-text-color duration-200 group-hover:bg-gray-100 group-hover:text-tg-title-color"
                      >
                        {menuItem.title}
                        <span
                          className={cn("duration-200", {
                            "rotate-180 transform":
                              openDropdown === menuItem.title,
                          })}
                        >
                          <DownArrowIcon className="size-5 text-gray-500" />
                        </span>
                      </button>

                      {menuItem?.title === "Blocks" &&
                        openDropdown === "Blocks" && (
                          <ComponentsDropdown menuItem={menuItem} />
                        )}
                      {menuItem?.title === "Products" &&
                        openDropdown === "Products" && (
                          <ProductsDropdown menuItem={menuItem} />
                        )}
                      {menuItem?.title === "Resources" &&
                        openDropdown === "Resources" && (
                          <ResourcesDropdown menuItem={menuItem} />
                        )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center">
            {/* social buttons section */}
            <div className="mb-8">
              <SocialLinks />
            </div>

            {/* signin button (placeholder) */}
            <div className="flex w-full flex-col items-center gap-3">
              <Button
                as="link"
                href="/pricing"
                className="flex h-10.5 w-full whitespace-nowrap"
                variant="secondary"
              >
                Pricing & FAQ
              </Button>

              <Link
                href="/signin"
                className="flex h-11 cursor-pointer items-center justify-center text-sm font-medium whitespace-nowrap text-tg-text-color hover:text-tg-title-color"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
