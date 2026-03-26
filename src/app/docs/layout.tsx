import { source } from "@/lib/source";
import DocsLayoutClient from "@/components/layout/docs-layout-client";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
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
    <DocsLayoutClient
      tree={source.pageTree}
      navTitle={baseOptions.nav?.title}
      links={baseOptions.links}
    >
      {children}
    </DocsLayoutClient>
  );
}