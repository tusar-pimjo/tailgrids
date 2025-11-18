"use client";

import Link from "next/link";

import { Github, Search, Menu, Moon, Sun } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/provider";
import { useSidebar } from "fumadocs-ui/provider";
import { useTheme } from "next-themes";
import Image from "next/image";
import { GithubIcon, MoonIcon, SunIcon } from "@/icons";

export default function GlobalHeader() {
  const { setOpenSearch } = useSearchContext();
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-[1620px] flex h-16 w-full items-center justify-between gap-4 px-4 2xl:px-8">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Toggle */}
          <button
            type="button"
            className="flex items-center justify-center text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Sidebar"
          >
            <Menu className="size-6" />
          </button>

          {/* Logo/Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="TailGrids Logo"
              width={150}
              height={40}
            />
          </Link>
        </div>

        {/* Search - Centered */}
        <button
          type="button"
          className="mx-auto hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-500 transition-colors hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-800 md:flex"
          onClick={() => setOpenSearch(true)}
        >
          <Search className="size-4" />
          <span>Search documentation...</span>
          <kbd className="ml-auto rounded border border-gray-300 bg-white px-2 py-0.5 text-xs font-semibold text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
            ⌘K
          </kbd>
        </button>

        {/* Mobile Buttons - Search & Theme Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
            onClick={() => setOpenSearch(true)}
            aria-label="Search"
          >
            <Search className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
            aria-label="Toggle Theme"
          >
            <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>

        {/* Right Side - Theme Toggle, GitHub & CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-tg-text-color-tertiary shadow-navbar-icon duration-200 hover:bg-gray-100 hover:text-tg-title-color hover:shadow-none"
            aria-label="Toggle Theme"
          >
            <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-400" />
            <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-400" />
          </button>

          <a
            href="https://github.com/TailGrids/oss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-tg-text-color-tertiary shadow-navbar-icon duration-200 hover:bg-gray-100 hover:text-tg-title-color hover:shadow-none"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="size-5" />
          </a>

          <a
            href="https://tailgrids.com/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link-btn"
          >
            Tailgrids Pro
          </a>
        </div>
      </div>
    </header>
  );
}
