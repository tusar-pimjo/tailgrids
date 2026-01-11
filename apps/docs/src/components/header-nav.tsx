"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Menu data with submenus
interface SubMenuItem {
  title: string;
  desc?: string;
  path: string;
  external?: boolean;
}

interface MenuItem {
  title: string;
  path?: string;
  external?: boolean;
  children?: SubMenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: "Blocks",
    children: [
      {
        title: "Application",
        path: "https://tailgrids.com/blocks/application",
        desc: "Components for modern web apps",
        external: true
      },
      {
        title: "Marketing",
        path: "https://tailgrids.com/blocks/marketing",
        desc: "Landing page components",
        external: true
      },
      {
        title: "Dashboard",
        path: "https://tailgrids.com/blocks/dashboard",
        desc: "Admin panel components",
        external: true
      },
      {
        title: "E-commerce",
        path: "https://tailgrids.com/blocks/e-commerce",
        desc: "Online store components",
        external: true
      }
    ]
  },
  {
    title: "Templates",
    path: "https://tailgrids.com/templates",
    external: true
  },
  {
    title: "Figma",
    path: "https://tailgrids.com/figma",
    external: true
  }
];

export default function HeaderNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav className="hidden xl:flex">
      <ul className="flex items-center gap-1">
        {menuData.map((menuItem, index) => {
          const hasDropdown = menuItem.children && menuItem.children.length > 0;
          const isOpen = openDropdown === menuItem.title;

          return (
            <li
              key={index}
              className="group relative"
              onMouseEnter={() =>
                hasDropdown && setOpenDropdown(menuItem.title)
              }
              onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
            >
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  target={menuItem.external ? "_blank" : "_self"}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition hover:text-primary-500 dark:hover:text-primary-400"
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button
                    className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition hover:text-primary-500 dark:hover:text-primary-400"
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : menuItem.title)
                    }
                  >
                    {menuItem.title}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        {
                          "rotate-180": isOpen
                        }
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-lg transition-all duration-200",
                      isOpen
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-2"
                    )}
                  >
                    {menuItem.children?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                        target={item.external ? "_blank" : "_self"}
                        className="flex flex-col gap-0.5 rounded-lg p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {item.title}
                        </span>
                        {item.desc && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
