
// import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
// import { baseOptions } from '@/lib/layout.shared';
// import { source } from '@/lib/source';
// import type { ReactNode } from 'react';

// export default function Layout({ children }: { children: ReactNode }) {

//     const { nav} = baseOptions;

//   return (
//       <DocsLayout  tree={source.pageTree} 
//         {...baseOptions}
//         tabMode="navbar"

//       >
//       {children}
//     </DocsLayout>

//   );
// }

import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template:
      "%s | ManyUI - Free UI Components to build beautiful websites",
    default: "ManyUI - Free UI Components to build beautiful websites",
  },
};



export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,

      }}
    >
      {children}
      
    </DocsLayout>
  );
}