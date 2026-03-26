"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";


export function NavCustom() {
  

  return (
    <div className=" flex items-center justify-end gap-1 flex-1">
      <div className="flex items-center justify-start md:justify-end gap-1 flex-1">
        
        <Link
          href="https://www.github.com/aastha-bharti"
          target="_blank"
          className="group relative inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
        >
          <IconBrandGithub className="size-4 text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/aastha-bharti/"
          target="_blank"
          className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
        >
          <LinkedinIcon className="w-4 h-4 text-zinc-900 group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white" />
        </Link>

      </div>
    </div>
  );
}
