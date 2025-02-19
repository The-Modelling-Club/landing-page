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

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navRef.current;
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        const isAtTop = rect.top === 0;
        if (isAtTop) {
          navbar.classList.add("border-b");
          return;
        }
        navbar.classList.remove("border-b");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
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
          {/* <Image src={"/logo_dark.png"} alt={"tmc's logo"} width={100} height={80} className={""} /> */}
          <p>The Modeling Club</p>
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
      <header ref={navRef} className="hidden transition-colors  bg-white/80 saturate-150 backdrop-blur-md lg:block py-2 px-6 sticky top-0 b z-[9999]">
        <nav className=" flex items-center justify-between  gap-10">
          <Link href={"/"} className=" h-16 grid place-content-center overflow-hidden ">
            {/* <Image src={"/logo_dark.png"} alt={"tmc's logo"} width={80} height={10} className={"mx-auto h-full w-full object-cover"} /> */}
            <p>The Modeling Club</p>
          </Link>
          <ul className=" flex ml-auto gap-4">
            {menuLinks.map((item) => (
              <li key={item.name} className={`relative group ${isActive(item.href ? "text-secondary" : "text-red-500")} hover:text-secondary`}>
                <Link
                  href={item.href}
                  className={` ${!item.dropdown ? "hover:underline hover:underline-offset-4" : ""} ease-in duration-100 flex items-center gap-2`}
                >
                  {item.name} {item.dropdown && <ChevronDownIcon size={14} />}
                </Link>
                {item.dropdown && item.dropdown}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
