import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | ManyUI - Free UI Components to build beautiful websites",
    default: "ManyUI - Free UI Components to build beautiful websites",
  },
};



export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
    <DocsLayout
      themeSwitch={ {
        enabled : false
      }}
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,}}>
      {children}
      
    </DocsLayout>
    </>
  );
}