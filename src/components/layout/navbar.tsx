"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";
import ThemeToggle from "../themeToggle";
import Link from "next/link";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed dark:text-neutral-50 text-neutral-800  w-full  z-50 bg-transparent ">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto p-3 flex justify-between items-center">
        <div className="p-2 text-textcolor font-bold text-2xl">Many ui</div>
        <div className="p-2 flex items-center gap-x-6">
          <Link href={"https://www.github.com/aastha-bharti"}><IconBrandGithub className="size-5"></IconBrandGithub></Link>
         <ThemeToggle className="" ></ThemeToggle>
        </div>
      </div>
    </nav>
  );
}
