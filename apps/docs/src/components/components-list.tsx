"use client";

import Link from "next/link";
import { REGISTRIES } from "../../../../packages/cli/src/registries";

export function ComponentsList() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 md:grid-cols-3 pt-12 pb-16">
      {REGISTRIES.map(component => (
        <Link
          key={component.id}
          href={`/docs/components/${component.id}`}
          className="text-base font-medium transition-colors hover:text-primary-600 hover:underline dark:hover:text-primary-400 no-underline max-w-fit decoration-primary-600 dark:decoration-primary-400"
        >
          {component.name}
        </Link>
      ))}
    </div>
  );
}
