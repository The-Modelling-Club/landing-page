export const TextBoxVariants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const TextItemsVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export const HeadingVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8,
    },
  },
};
export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.8,
    },
  },
};

export const menuLinks = [
  {
    name: "Articles",
    href: "/articles",
    icon: "solar:graph-new-up-line-duotone",
    activeIcon: "solar:graph-new-bold-duotone",
    dropdown: false,
    // dropdown: <NavbarSolutionsDropdown />,
  },
  {
    name: "Events",
    href: "/events",
    icon: "solar:documents-line-duotone",
    activeIcon: "solar:documents-bold-duotone",
    dropdown: false,
    // dropdown: <NavbarResourcesDropdown />,
  },

  {
    name: "About",
    href: "/team",
    icon: "solar:info-square-line-duotone",
    activeIcon: "solar:info-square-bold-duotone",
    dropdown: false,
  },

  {
    name: "Projects",
    href: "/projects",
    icon: "solar:card-2-line-duotone",
    activeIcon: "solar:card-2-bold-duotone",
    dropdown: false,
  },
];
