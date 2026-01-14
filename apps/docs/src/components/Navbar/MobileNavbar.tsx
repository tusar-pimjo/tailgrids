"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/icons";
import { Button } from "../ui/Button";
import {
  AccountIconProfile,
  ChevronRightIcon,
  ColoredFigmaIcon,
  ColoredReactIcon,
  ColoredVueIcon,
  CrossIcon,
  DashboardIcon,
  HamburgerIcon
} from "../ui/icons";
import SearchBarNav from "./SearchBarNav";

export default function MobileNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // TODO: Replace with actual auth state
  const isLoggedIn = true; // Set to true to show logged-in state

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  // Components Menu Data
  const componentsItems = [
    {
      title: "Core Components",
      icon: <DashboardIcon className="size-5" />,
      description:
        "Core UI Components to kickstart any web projects - Open-source",
      link: "/blocks/core"
    },
    {
      title: "Application",
      icon: <DashboardIcon className="size-5" />,
      description:
        "Components crafted for build all kind of modern webapps and sites",
      link: "/blocks/application"
    },
    {
      title: "Dashboard",
      icon: <DashboardIcon className="size-5" />,
      description:
        "Build data-rich modern backends, dashboards and admin panels",
      link: "/blocks/dashboard"
    },
    {
      title: "AI Components",
      icon: <DashboardIcon className="size-5" />,
      description: "All you need to create stunning AI tools & landing pages",
      link: "/blocks/ai"
    },
    {
      title: "Marketing",
      icon: <DashboardIcon className="size-5" />,
      description:
        "All you need to create stunning and high-converting landing pages",
      link: "/blocks/marketing"
    },
    {
      title: "E-commerce",
      icon: <DashboardIcon className="size-5" />,
      description:
        "Components and Pages need to build complete online store UI",
      link: "/blocks/ecommerce"
    }
  ];

  // Products Menu Data
  const productsItems = [
    {
      title: "Tailgrids React.js",
      href: "/products/tailgrids-react",
      icon: <ColoredReactIcon className="size-6" />,
      description: "Tailwind UI components for react.js"
    },
    {
      title: "Tailgrids Vue.js",
      href: "/products/tailgrids-vue",
      icon: <ColoredVueIcon className="size-6" />,
      description: "Tailwind UI components for vue.js"
    },
    {
      title: "Tailgrids Figma",
      href: "/figma",
      icon: <ColoredFigmaIcon className="size-6" />,
      description: "Tailwind UI components for figma"
    }
  ];

  // Resources Menu Data
  const resourcesItems = [
    {
      title: "Community",
      href: "/resources/community",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6791 12.4088C17.7692 11.9331 17.8146 11.4442 17.8155 10.9423C17.8184 9.0541 17.1356 7.22905 15.8942 5.80632M2.56158 8.49684C2.92902 7.38184 3.54244 6.36372 4.35646 5.51777C5.17048 4.67183 6.16427 4.01973 7.26432 3.60968M11.4605 18.6261C10.9773 18.7191 10.4861 18.7648 9.994 18.7625C8.21499 18.765 6.48867 18.1588 5.10179 17.0446M10.0016 6.21053C10.6925 6.21053 11.3552 5.93604 11.8438 5.44746C12.3324 4.95888 12.6068 4.29622 12.6068 3.60526C12.6068 2.9143 12.3324 2.25165 11.8438 1.76306C11.3552 1.27448 10.6925 1 10.0016 1C9.31062 1 8.64796 1.27448 8.15938 1.76306C7.6708 2.25165 7.39632 2.9143 7.39632 3.60526C7.39632 4.29622 7.6708 4.95888 8.15938 5.44746C8.64796 5.93604 9.31062 6.21053 10.0016 6.21053ZM2.13463 12.7183C2.4309 12.5473 2.75794 12.4363 3.0971 12.3917C3.43626 12.347 3.78089 12.3696 4.11131 12.4582C4.44173 12.5468 4.75147 12.6995 5.02285 12.9078C5.29423 13.1161 5.52193 13.3757 5.69295 13.672C5.86397 13.9683 5.97497 14.2953 6.0196 14.6345C6.06423 14.9736 6.04162 15.3183 5.95306 15.6487C5.8645 15.9791 5.71173 16.2888 5.50347 16.5602C5.2952 16.8316 5.03553 17.0593 4.73926 17.2303C4.14094 17.5757 3.42991 17.6693 2.76259 17.4904C2.09528 17.3116 1.52634 16.875 1.18095 16.2766C0.835553 15.6783 0.741989 14.9673 0.92084 14.3C1.09969 13.6326 1.5363 13.0637 2.13463 12.7183ZM15.2563 17.2291C14.9601 17.0579 14.7006 16.8302 14.4924 16.5588C14.2843 16.2873 14.1316 15.9776 14.0432 15.6471C13.9547 15.3167 13.9322 14.9721 13.977 14.633C14.0217 14.2939 14.1328 13.9669 14.3039 13.6707C14.475 13.3746 14.7028 13.115 14.9742 12.9068C15.2456 12.6987 15.5554 12.546 15.8858 12.4576C16.2162 12.3691 16.5608 12.3466 16.8999 12.3914C17.2391 12.4361 17.566 12.5472 17.8622 12.7183C18.4604 13.0639 18.8968 13.6329 19.0754 14.3002C19.254 14.9675 19.1602 15.6785 18.8146 16.2766C18.4691 16.8748 17.9 17.3112 17.2327 17.4898C16.5654 17.6684 15.8545 17.5746 15.2563 17.2291Z"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Connect, share, and grow with fellow users."
    },
    {
      title: "Support",
      href: "/resources/support",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9983 14.1429H18.9057C19.9571 14.1429 20.8097 13.2903 20.8097 12.2377V6.048C20.8097 4.99657 19.9571 4.14285 18.9057 4.14285H9.14341C8.09198 4.14285 7.23826 4.99542 7.23826 6.048V7.952M15.0954 7.952H5.09541C4.04398 7.952 3.19141 8.80571 3.19141 9.85714V16.048C3.19141 17.0994 4.04398 17.952 5.09541 17.952H6.28626V20.3337L10.572 17.952H15.0954C16.1468 17.952 17.0005 17.0994 17.0005 16.048V9.85714C17.0005 8.80571 16.148 7.952 15.0954 7.952Z"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Need help? Our team's here for you."
    },
    {
      title: "Roadmap",
      href: "/resources/roadmap",
      icon: (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0003 13.2504V17.25M11.0003 13.2504H5.03627C4.38707 13.2504 3.77627 12.9348 3.40307 12.4032L1.81427 10.1532C1.57671 9.81558 1.44922 9.41283 1.44922 9C1.44922 8.58718 1.57671 8.18442 1.81427 7.8468L3.40307 5.5968C3.77747 5.0652 4.38707 4.7496 5.03627 4.7496H10.0007C10.5527 4.7496 11.0003 5.1972 11.0003 5.7504V13.2504ZM11.9999 0.75H16.9643C17.6135 0.75 18.2231 1.0656 18.5975 1.5972L20.1863 3.8472C20.4238 4.18482 20.5513 4.58758 20.5513 5.0004C20.5513 5.41322 20.4238 5.81598 20.1863 6.1536L18.5975 8.4036C18.2231 8.934 17.6135 9.2496 16.9643 9.2496H11.9999C11.735 9.24928 11.481 9.14383 11.2938 8.9564C11.1066 8.76897 11.0015 8.5149 11.0015 8.25V1.7496C11.0015 1.1976 11.4479 0.75 11.9999 0.75Z"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Discover upcoming features and releases."
    },
    {
      title: "Blog",
      href: "/resources/blog",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.75 5.7504H9.25M1.75 9.75H6.25M21.3364 6.9732L20.026 5.6652C19.6509 5.29023 19.1422 5.07959 18.6118 5.07959C18.0814 5.07959 17.5727 5.29023 17.1976 5.6652L8.3356 14.526C7.96082 14.9015 7.75023 15.4103 7.75 15.9408V19.2504H11.0596C11.59 19.2504 12.0988 19.0392 12.4732 18.6636L21.3364 9.8016C22.1164 9.0216 22.1164 7.7544 21.3364 6.9732Z"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Fresh news and product updates."
    }
  ];

  return (
    <nav className="w-full bg-white xl:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/tailgrids-full-logo.svg"
            alt="Logo"
            width={110}
            height={32}
          />
        </Link>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          {mobileMenuOpen ? (
            <></>
          ) : (
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Search"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2002 0C17.3857 0.000158454 22.4012 5.0135 22.4014 11.1982C22.4013 13.9316 21.4193 16.4346 19.792 18.3789L23.9062 22.4932C24.2967 22.8837 24.2967 23.5167 23.9062 23.9072C23.5157 24.2976 22.8826 24.2977 22.4922 23.9072L18.3779 19.792C16.4339 21.417 13.932 22.3974 11.2002 22.3975C5.01474 22.3972 0.000154394 17.383 0 11.1982C0.000185577 5.01355 5.01476 0.000244758 11.2002 0ZM11.2002 2C6.11895 2.00024 2.00019 6.1185 2 11.1982C2.00015 16.278 6.11893 20.3972 11.2002 20.3975C16.2815 20.3973 20.4012 16.2781 20.4014 11.1982C20.4012 6.11845 16.2815 2.00016 11.2002 2Z"
                  fill="currentColor"
                  className="text-gray-500 dark:text-gray-400"
                />
              </svg>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ease-linear hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <MoonIcon className="size-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <SunIcon className="size-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center transition-all duration-200 ease-linear ${
              mobileMenuOpen
                ? ""
                : "rounded-[11.5px] border border-[#EDEDED] shadow-icon hover:bg-gray-100"
            }`}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <CrossIcon className="animate-in spin-in-90 size-4 text-gray-600 duration-200" />
            ) : (
              <HamburgerIcon className="animate-in spin-in-90 size-5 text-gray-600 duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute top-full right-0 left-0 z-50 border-b border-[#EDEDED] bg-white p-4 shadow-lg duration-200">
          <SearchBarNav />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 fixed top-(--navbar-height,60px) right-0 bottom-0 left-0 z-50 overflow-y-auto border-t border-[#EDEDED] bg-white shadow-lg duration-300 ease-out">
          <div className="flex h-full flex-col">
            {/* Menu Items */}
            <div className="flex-1 space-y-1 p-4">
              {/* Search Bar */}
              <div className="mb-3">
                <SearchBarNav />
              </div>
              {/* Components Dropdown */}
              <div>
                <button
                  onClick={() => toggleMenu("components")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                >
                  Components
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${
                      expandedMenu === "components" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedMenu === "components" && (
                  <div className="mt-2 overflow-hidden">
                    {componentsItems.map((item, index) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex -translate-y-2.5 items-start gap-3 rounded-lg px-6 py-5 opacity-0 transition-all duration-200 ease-linear hover:bg-gray-100"
                        style={{
                          animation: "slideInDown 0.3s ease-out forwards",
                          animationDelay: `${index * 80}ms`
                        }}
                      >
                        <div className="mt-0.5 shrink-0">{item.icon}</div>
                        <div>
                          <h4 className="text-base leading-6 font-medium tracking-[-0.02px] text-gray-800">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-sm leading-5 tracking-[-0.02px] text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="my-3 border-t border-dashed border-gray-300"></div>

              {/* Templates */}
              <Link
                href="/templates"
                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Templates
              </Link>

              {/* Divider */}
              <div className="my-3 border-t border-dashed border-gray-300"></div>

              {/* Docs */}
              <Link
                href="/docs"
                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>

              {/* Divider */}
              <div className="my-3 border-t border-dashed border-gray-300"></div>

              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => toggleMenu("products")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${
                      expandedMenu === "products" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedMenu === "products" && (
                  <div className="mt-2 space-y-1 overflow-hidden">
                    {productsItems.map((item, index) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex -translate-y-2.5 items-start gap-3 rounded-lg px-4 py-3 opacity-0 transition-all duration-200 ease-linear hover:bg-gray-100"
                        style={{
                          animation: "slideInDown 0.3s ease-out forwards",
                          animationDelay: `${index * 80}ms`
                        }}
                      >
                        <div className="mt-0.5 shrink-0 rounded-lg bg-white p-2 shadow-icon">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-base leading-6 font-medium tracking-[-0.02px] text-gray-800">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-sm leading-5 tracking-[-0.02px] text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="my-3 border-t border-dashed border-gray-300"></div>

              {/* Resources Dropdown */}
              <div>
                <button
                  onClick={() => toggleMenu("resources")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                >
                  Resources
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ease-out ${
                      expandedMenu === "resources" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedMenu === "resources" && (
                  <div className="mt-2 space-y-1 overflow-hidden">
                    {resourcesItems.map((item, index) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex -translate-y-2.5 items-start gap-3 rounded-lg px-4 py-3 opacity-0 transition-all duration-200 ease-linear hover:bg-gray-100"
                        style={{
                          animation: "slideInDown 0.3s ease-out forwards",
                          animationDelay: `${index * 80}ms`
                        }}
                      >
                        <div className="mt-0.5 shrink-0">{item.icon}</div>
                        <div>
                          <h4 className="text-base leading-6 font-medium tracking-[-0.02px] text-gray-800">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-sm leading-5 tracking-[-0.02px] text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section - Social Links and Auth Buttons */}
            <div className="space-y-8 p-4">
              {/* Social Links */}
              <div className="flex items-center justify-center gap-2"></div>

              {/* Auth Buttons or Account Button */}
              {isLoggedIn ? (
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => setShowAccountPopup(true)}
                    className="w-full"
                  >
                    <AccountIconProfile /> Account{" "}
                    <ChevronRightIcon
                      className={`inline-block h-4 w-4 ${
                        showAccountPopup ? "rotate-270" : "rotate-90"
                      }`}
                    />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col-reverse items-center gap-2">
                  <Link
                    href="/signin"
                    className="w-full rounded-lg px-4 py-3 text-center font-medium text-gray-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/pricing"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      className="w-full transition-all duration-200 ease-linear"
                      variant="secondary"
                    >
                      Pricing & FAQ
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Account Popup - Slides up from bottom */}
      {showAccountPopup && (
        <>
          {/* Backdrop */}
          <div
            className="animate-in fade-in fixed inset-0 z-50 duration-300"
            onClick={() => setShowAccountPopup(false)}
          />

          {/* Popup Menu */}
          <div className="animate-in slide-in-from-bottom fixed right-0 bottom-16 left-0 z-50 duration-300 ease-out">
            <div className="mx-3 mb-3 overflow-hidden rounded-20 border border-[#EDEDED] bg-white shadow-2xl">
              {/* User Info Section */}
              <div className="border-b border-[#EDEDED] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    {/* All-Access Badge */}
                    <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                      All-Access
                    </span>
                    {/* User Name */}
                    <h3 className="text-xl leading-tight font-semibold text-gray-900">
                      Musharoff Chowdhury
                    </h3>
                    {/* Email */}
                    <p className="mt-1 text-base text-gray-500">
                      musharoff@gmail.com
                    </p>
                  </div>
                  {/* Arrow Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {/* Account Settings */}
                <Link
                  href="/account/settings"
                  className="flex items-center gap-3 px-6 py-4 transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => {
                    setShowAccountPopup(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500"
                  >
                    <path
                      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11.059v1.954l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    Account Settings
                  </span>
                </Link>

                {/* Downloads */}
                <Link
                  href="/account/downloads"
                  className="flex items-center gap-3 bg-gray-50 px-6 py-4 transition-colors duration-200 hover:bg-gray-100"
                  onClick={() => {
                    setShowAccountPopup(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500"
                  >
                    <path
                      d="M12 3v13m0 0l-4-4m4 4l4-4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    Downloads
                  </span>
                </Link>

                {/* Manage Team */}
                <Link
                  href="/account/team"
                  className="flex items-center gap-3 px-6 py-4 transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => {
                    setShowAccountPopup(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500"
                  >
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    Manage Team
                  </span>
                </Link>

                {/* Billing */}
                <Link
                  href="/account/billing"
                  className="flex items-center gap-3 px-6 py-4 transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => {
                    setShowAccountPopup(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500"
                  >
                    <path
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    Billing
                  </span>
                </Link>
              </div>

              {/* Divider */}
              <div className="my-2 border-t border-[#EDEDED]" />

              {/* Logout */}
              <div className="py-2">
                <button
                  onClick={() => {
                    // Handle logout logic here
                    setShowAccountPopup(false);
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-6 py-4 transition-colors duration-200 hover:bg-gray-50"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-500"
                  >
                    <path
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    Log out
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
