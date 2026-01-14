"use client";

import { useSearchContext } from "fumadocs-ui/provider";
import { SearchIcon } from "@/icons";

export default function SearchToggle() {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      onClick={() => setOpenSearch(true)}
      className="flex size-9 shrink-0 items-center cursor-pointer justify-center dark:shadow-none dark:border-[#111827] dark:bg-white/5 rounded-xl shadow-navbar-icon transition text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      aria-label="Search"
    >
      <SearchIcon className="size-4" />
    </button>
  );
}
