import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavCustom } from "@/components/landing/navCustom";
import ThemeToggle from "@/components/layout/theme-toggle";



export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <img src="/logo.png" alt="ManyUI" width={20} height={20} className="mr-2 dark:invert"/>
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          ManyUI
        </span>
      </div>
    ),
  },
  links: [
    {
      type: "custom",
      children: <NavCustom />,
    },
    {
      type: "custom",
      children: <ThemeToggle />,
    }
  ],
};