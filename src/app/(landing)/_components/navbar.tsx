"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import MobileSidebar from "./mobile_sidebar";
import { menuLinks } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import TmcLogo from "@/app/assets/images/tmc_logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (pathname !== "/" && href === "/") {
      return false;
    }
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
        document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <AnimatePresence>
        {isSidebarOpen && (
          <MobileSidebar
            onClose={() => {
              setIsSidebarOpen(false);
              document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
            }}
          />
        )}
      </AnimatePresence>

      <nav className={"sticky top-0 z-[9999] bg-white/70 backdrop-blur-lg saturate-200 flex max-w-full items-center justify-between border-b p-4 lg:hidden"}>
        <Link onClick={() => setIsSidebarOpen(false)} href={"/"}>
          <Image src={TmcLogo} alt={"tmc's logo"} width={60} height={60} className={"mx-auto h-full w-full object-cover"} />
        </Link>
        <button
          className={"bg-slate-50 grid place-content-center rounded-full size-11 lg:hidden"}
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
            document.body.style.overflow = isSidebarOpen ? "auto" : "hidden";
          }}
        >
          <Icon icon={`${isSidebarOpen ? "material-symbols:close" : "solar:hamburger-menu-line-duotone"}`} width={20} />
        </button>
      </nav>
      <header className="hidden lg:block w-[calc(100%-24px)] py-4 px-6 fixed top-0 z-[9999] mx-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Left floating element */}
          <div className="bg-white/40 border border-gray-200/50 pl-2 pr-4 flex items-center gap-2 saturate-150 backdrop-blur rounded-full ">
            <Link href={"/"} className="h-16 grid place-content-center overflow-hidden">
              <Image src={TmcLogo} alt={"tmc's logo"} width={40} height={40} className={"mx-auto h-full w-full object-cover"} />
            </Link>
            <span className="font-semibold text-gray-700">The Modeling Club</span>
          </div>

          {/* Nav Links - Center floating element */}
          <div className="bg-white/40 saturate-150 backdrop-blur rounded-full border border-gray-200/50 py-3 h-16 px-12">
            <ul className="flex items-center justify-center h-full gap-6">
              {menuLinks.map((item) => (
                <li
                  key={item.name}
                  className={`relative group ${isActive(item.href) ? "text-secondary" : "text-gray-700"} hover:text-secondary transition-colors duration-200`}
                >
                  <Link href={item.href} className={` ease-in duration-100 flex items-center gap-2 font-medium`}>
                    {item.name} {item.dropdown && <ChevronDownIcon size={14} />}
                  </Link>
                  {item.dropdown && item.dropdown}
                </li>
              ))}
            </ul>
          </div>

          {/* Membership Icon - Right floating element */}
          <div className="bg-white/40 saturate-150  backdrop-blur rounded-full border border-gray-200/50 ">
            <Link
              href="https://forms.gle/gkK1mkfs66EjzyDV8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 transition-colors duration-200 rounded-full"
            >
              <Icon icon="solar:user-plus-bold" width={24} />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
