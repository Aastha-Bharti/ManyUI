"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";


export function NavCustom() {
  

  return (
    <div className="flex items-center justify-end gap-1 flex-1">
      <div className="flex items-center justify-start md:justify-end gap-1 flex-1">
        
        <Link href={"https://www.github.com/aastha-bharti"}><IconBrandGithub className="size-5"></IconBrandGithub></Link>

        <Link
          href="#"
          target="_blank"
          className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-100 dark:bg-zinc-900 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 "
        >
          <LinkedinIcon className="w-4 h-4  dark:text-zinc-900  stroke-white dark:group-hover:stroke-black" />
        </Link>

      </div>
    </div>
  );
}
