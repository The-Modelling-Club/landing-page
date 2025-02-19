import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

const MobileSidebar = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (pathname !== "/" && href === "/") {
      return false;
    }
    return pathname?.startsWith(href);
  };

  return (
    <motion.aside
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      transition={{
        ease: [0.76, 0, 0.24, 1],
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className={"fixed lg:hidden inset-0 z-[99] w-full bg-black/50 backdrop-blur"}
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -100,
        }}
        className="h-full w-full max-w-2xl overflow-auto border-r bg-white/80 saturate-150 p-4 pb-12"
      >
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          {/* <Image src={"/logo_dark.png"} alt={"tmc's logo"} width={100} height={80} className={"mx-auto mb-16"} /> */}
          <p>The Modeling Club</p>
        </motion.span>
        <nav className="mt-20 ">
          <span className={"mb-6 inline-block pl-4 text-xs font-semibold uppercase text-gray-600"}>menu</span>
          <ul className={"flex flex-col gap-8"}>
            {menuLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    onClick={onClose}
                    href={link.href}
                    className={`btn justify-start flex items-center py-2 rounded-full gap-2 pl-4 transition-colors focus-visible:ring-primary-800 ${
                      active ? "bg-primary/10 text-black" : "text-gray-700 "
                    }`}
                  >
                    <Icon icon={active ? link.activeIcon : link.icon} width={20} />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </motion.aside>
  );
};

export default MobileSidebar;
