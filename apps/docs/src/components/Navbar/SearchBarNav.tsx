"use client";

import { useSearchContext } from "fumadocs-ui/provider";

export default function SearchBarNav() {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      onClick={() => setOpenSearch(true)}
      className="flex h-12 w-full items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-500 transition hover:bg-gray-100 dark:border-[#111827] dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500 dark:text-gray-400"
      >
        <path
          d="M11.2002 0C17.3857 0.000158454 22.4012 5.0135 22.4014 11.1982C22.4013 13.9316 21.4193 16.4346 19.792 18.3789L23.9062 22.4932C24.2967 22.8837 24.2967 23.5167 23.9062 23.9072C23.5157 24.2976 22.8826 24.2977 22.4922 23.9072L18.3779 19.792C16.4339 21.417 13.932 22.3974 11.2002 22.3975C5.01474 22.3972 0.000154394 17.383 0 11.1982C0.000185577 5.01355 5.01476 0.000244758 11.2002 0ZM11.2002 2C6.11895 2.00024 2.00019 6.1185 2 11.1982C2.00015 16.278 6.11893 20.3972 11.2002 20.3975C16.2815 20.3973 20.4012 16.2781 20.4014 11.1982C20.4012 6.11845 16.2815 2.00016 11.2002 2Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-base font-medium">Quick search...</span>
    </button>
  );
}
