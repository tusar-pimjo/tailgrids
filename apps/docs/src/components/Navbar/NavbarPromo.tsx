"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { BorderLine } from "../ui/ContainerWithGrid";
import { ChevronRightIcon, CloseLineSm } from "../ui/icons";

export default function NavbarPromo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hidePromo = localStorage.getItem("hide-promo");

    setIsVisible(!hidePromo);
  }, []);

  if (!isVisible) {
    return null;
  }

  function handleClose() {
    localStorage.setItem("hide-promo", "true");
    setIsVisible(false);
  }

  return (
    <div className="relative p-3">
      <BorderLine position="bottom" className="w-screen" />
      <div className="relative flex flex-wrap items-center justify-center gap-2.5 rounded-lg bg-black/4 p-3 pr-8 text-sm -tracking-[0.2px] text-tg-text-color-secondary">
        <span>
          We just released our biggest updates -{" "}
          <span className="font-medium text-tg-title-color">
            Tailgrids V3.0 🎉
          </span>{" "}
        </span>
        <Button
          as="link"
          href="/"
          className="h-6 gap-1 pr-1.5 pl-2.5 text-xs shadow-promo max-sm:hidden"
        >
          Check it out
          <ChevronRightIcon className="size-4" />
        </Button>
        <button
          onClick={handleClose}
          className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-tg-text-color-tertiary transition-colors hover:bg-black/5 hover:text-tg-text-color-secondary"
          aria-label="Close promo banner"
        >
          <CloseLineSm className="size-5" />
        </button>
      </div>
    </div>
  );
}
