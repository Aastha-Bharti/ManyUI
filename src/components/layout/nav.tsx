

"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import { LinkedinIcon } from "lucide-react";
import ThemeToggle from "../themeToggle";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Components", link: "/docs/components/ai-input" },
    { name: "Docs", link: "/docs" },
  ];

  return (
    <div className="w-full fixed top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Left - Logo */}
          <Link href="/" className="font-bold text-2xl font-ubuntu text-neutral-900 dark:text-neutral-200 flex items-center gap-2 relative z-70">
            <img src="/logo.png" alt="ManyUI" width={22} height={22} className="dark:invert"/>
            Many UI
          </Link>

          {/* Center - Links */}
          <NavItems items={navLinks} />

          {/* Right - Actions */}
          <div className="flex items-center gap-2 relative z-70">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className="group relative inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            >
              <IconBrandGithub className="size-4 text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className="group relative inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            >
              <LinkedinIcon className="size-4 text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white" />
            </Link>
            <ThemeToggle className="cursor-pointer ml-1" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="font-bold text-xl flex items-center gap-2">
              <img src="/logo.png" alt="ManyUI" width={18} height={18} className="dark:invert"/>
              Many UI
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-neutral-200 dark:bg-neutral-800 w-full" />
              <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <IconBrandGithub className="size-5" />
                  GitHub
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="size-5" />
                  LinkedIn
                </Link>
              </div>
                <ThemeToggle className="cursor-pointer" />
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
