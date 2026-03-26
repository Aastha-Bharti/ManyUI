'use client';

import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

interface DocsLayoutClientProps {
  children: ReactNode;
  tree: any;
  navTitle?: ReactNode;
  links?: any[];
}

export default function DocsLayoutClient({ children, tree, navTitle, links }: DocsLayoutClientProps) {
  return (
    <DocsLayout
      themeSwitch={{
        enabled: false
      }}
      tree={tree}
      nav={{ title: navTitle }}
      links={links}
      sidebar={{
        defaultOpenLevel: 1,
        components: {
          Separator: (props) => (
            <div className={`${ubuntu.className} flex items-center gap-2 px-2 py-4 mt-4 first:mt-0`}>
              <span className="text-[12px] font-bold tracking-[0.2em] text-zinc-600 dark:text-zinc-500 uppercase whitespace-nowrap">
                {typeof props.item.name === 'string' ? props.item.name.replace(/-/g, '') : props.item.name}
              </span>
            </div>
          )
        }
      }}
    >
      {children}
    </DocsLayout>
  );
}
