

"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import ThemeToggle from "../themeToggle";
import Link from "next/link";
import { useState } from "react";

export function Nav() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Left */}
          <div className="font-bold text-2xl font-ubuntu text-neutral-400">Many UI</div>

         

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link href="https://www.github.com/aastha-bharti">
              <IconBrandGithub className="size-5" />
            </Link>
            <ThemeToggle className="cursor-pointer" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="font-bold text-xl">Many UI</div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-4">
              <Link
                href="https://www.github.com/aastha-bharti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
              >
                <IconBrandGithub className="size-5" />
                GitHub
              </Link>

              <ThemeToggle className="cursor-pointer" />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
