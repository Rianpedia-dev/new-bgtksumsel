"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface SubMenuItem {
  label: string;
  description: string;
  icon: React.ElementType;
  href?: string;
}

export interface SubMenuGroup {
  title: string;
  items: SubMenuItem[];
}

export interface NavItem {
  id: number | string;
  label: string;
  link?: string;
  align?: "left" | "right" | "center";
  subMenus?: SubMenuGroup[];
}

export interface DropdownNavigationProps {
  navItems: NavItem[];
  className?: string;
  itemClassName?: string;
  hoverBgClassName?: string;
}

export function DropdownNavigation({
  navItems,
  className = "",
  itemClassName = "",
  hoverBgClassName = "bg-white/15",
}: DropdownNavigationProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | string | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const isItemActive = (navItem: NavItem) => {
    if (navItem.link) {
      if (navItem.link === "/") return pathname === "/";
      if (pathname.startsWith(navItem.link)) return true;
    }
    if (navItem.subMenus) {
      return navItem.subMenus.some((group) =>
        group.items.some((item) => item.href && pathname.startsWith(item.href))
      );
    }
    return false;
  };

  return (
    <ul className={`relative flex items-center space-x-1 ${className}`}>
      {navItems.map((navItem) => {
        const active = isItemActive(navItem);
        const isOpen = openMenu === navItem.label;
        const isHovered = isHover === navItem.id;

        const buttonContent = (
          <>
            <span className="relative z-10">{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            )}
            {(isHovered || isOpen || active) && (
              <motion.div
                layoutId="hover-bg"
                className={`absolute inset-0 size-full rounded-full ${
                  active ? "bg-blue-800/90 text-amber-300" : hoverBgClassName
                }`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
              />
            )}
          </>
        );

        return (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link && !navItem.subMenus ? (
              <Link
                href={navItem.link}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
                className={`text-[15px] py-2.5 px-4 flex cursor-pointer group transition-colors duration-200 items-center justify-center gap-1.5 relative font-medium rounded-full ${
                  active ? "text-amber-300 font-semibold" : "text-slate-100 hover:text-white"
                } ${itemClassName}`}
              >
                {buttonContent}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (navItem.link) {
                    window.location.href = navItem.link;
                  }
                }}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
                className={`text-[15px] py-2.5 px-4 flex cursor-pointer group transition-colors duration-200 items-center justify-center gap-1.5 relative font-medium rounded-full outline-none ${
                  active ? "text-amber-300 font-semibold" : "text-slate-100 hover:text-white"
                } ${itemClassName}`}
              >
                {buttonContent}
              </button>
            )}

            <AnimatePresence>
              {isOpen && navItem.subMenus && (
                <div
                  className={`w-auto absolute ${
                    navItem.align === "right" ? "right-0" : "left-0"
                  } top-full pt-3 z-50`}
                >
                  <motion.div
                    className="bg-card text-card-foreground border border-border p-6 rounded-2xl shadow-2xl w-max"
                    style={{ borderRadius: 16 }}
                    layoutId="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-fit shrink-0 flex space-x-10 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div
                          layout
                          className="w-full min-w-[240px] max-w-[300px]"
                          key={sub.title}
                        >
                          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <Link
                                    href={item.href || "#"}
                                    onClick={() => setOpenMenu(null)}
                                    className="flex items-start space-x-3.5 group/item p-2 -m-2 rounded-xl hover:bg-muted/70 transition-colors duration-200"
                                  >
                                    <div className="border border-border text-foreground rounded-xl flex items-center justify-center size-10 shrink-0 group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:border-primary transition-colors duration-200 shadow-xs">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="leading-tight w-max max-w-[230px]">
                                      <p className="text-sm font-semibold text-card-foreground group-hover/item:text-primary transition-colors duration-200">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-muted-foreground group-hover/item:text-foreground/80 transition-colors duration-200 line-clamp-1 mt-1">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

import {
  Cpu,
  Globe,
  Eye,
  Shield,
  Rocket,
  Box,
  Search,
  Palette,
  BookOpen,
  FileText,
  Newspaper,
} from "lucide-react";

export function Demo() {
  const NAV_ITEMS: NavItem[] = [
    {
      id: 1,
      label: "Products",
      subMenus: [
        {
          title: "DX Platform",
          items: [
            {
              label: "Previews",
              description: "Helping teams ship 6× faster",
              icon: Cpu,
            },
            {
              label: "AI",
              description: "Powering breakthroughs",
              icon: Search,
            },
          ],
        },
        {
          title: "Managed Infrastructure",
          items: [
            {
              label: "Rendering",
              description: "Fast, scalable, and reliable",
              icon: Globe,
            },
            {
              label: "Observability",
              description: "Trace every step",
              icon: Eye,
            },
            {
              label: "Security",
              description: "Scale without compromising",
              icon: Shield,
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "Next.js",
              description: "The native Next.js platform",
              icon: Rocket,
            },
            {
              label: "Turborepo",
              description: "Speed with Enterprise scale",
              icon: Box,
            },
            {
              label: "AI SDK",
              description: "The AI Toolkit for TypeScript",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Solutions",
      subMenus: [
        {
          title: "Use Cases",
          items: [
            {
              label: "AI Apps",
              description: "Deploy at the speed of AI",
              icon: Cpu,
            },
            {
              label: "Composable Commerce",
              description: "Power storefronts that convert",
              icon: Box,
            },
            {
              label: "Marketing Sites",
              description: "Launch campaigns fast",
              icon: Rocket,
            },
            {
              label: "Multi-tenant Platforms",
              description: "Scale apps with one codebase",
              icon: Globe,
            },
            {
              label: "Web Apps",
              description: "Ship features, not infrastructure",
              icon: Search,
            },
          ],
        },
        {
          title: "Users",
          items: [
            {
              label: "Platform Engineers",
              description: "Automate away repetition",
              icon: Cpu,
            },
            {
              label: "Design Engineers",
              description: "Deploy for every idea",
              icon: Palette,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Resources",
      subMenus: [
        {
          title: "Tools",
          items: [
            {
              label: "Resource Center",
              description: "Today's best practices",
              icon: BookOpen,
            },
            {
              label: "Marketplace",
              description: "Extend and automate workflows",
              icon: Search,
            },
            {
              label: "Templates",
              description: "Jumpstart app development",
              icon: FileText,
            },
            {
              label: "Guides",
              description: "Find help quickly",
              icon: BookOpen,
            },
            {
              label: "Partner Finder",
              description: "Get help from solution partners",
              icon: Search,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Customers",
              description: "Trusted by the best teams",
              icon: Newspaper,
            },
            {
              label: "Blog",
              description: "The latest posts and changes",
              icon: FileText,
            },
            {
              label: "Changelog",
              description: "See what shipped",
              icon: BookOpen,
            },
            {
              label: "Press",
              description: "Read the latest news",
              icon: Newspaper,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Enterprise",
      link: "#",
    },
    {
      id: 5,
      label: "Docs",
      link: "#",
    },
    {
      id: 6,
      label: "Pricing",
      link: "#",
    },
  ];

  return <DropdownNavigation navItems={NAV_ITEMS} />;
}

