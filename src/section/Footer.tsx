"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-[#050505] border-t border-zinc-200 dark:border-white/5 pt-12 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">

          {/* Brand & Copyright */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">

              <img src="/logo.png" alt="Logo" width={20} height={20} className="dark:invert" />

              <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Many UI</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs">
              © 2026 Many UI. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-20 gap-y-6">
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Home</Link>
              <Link href="/components" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Components</Link>
              <Link href="/docs" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Docs</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="https://x.com/aastha_bhartii" target="_blank" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</Link>
              <Link href="https://www.github.com/aastha-bharti" target="_blank" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Github</Link>
              <Link href="https://www.linkedin.com/in/aastha-bharti/" target="_blank" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Giant Background Text */}
        <div className="mt-1 md:mt-14 w-full flex justify-center items-center">
          <h2 className="bg-linear-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent select-none md:text-7xl lg:text-[10rem] dark:from-neutral-700 dark:to-neutral-900 uppercase tracking-tighter leading-none font-ubuntu">
            MANY UI
          </h2>
        </div>

        {/* Bottom Credits */}
        <div className="mt-6 md:mt-8 text-center text-sm text-zinc-500 dark:text-zinc-500 flex items-center justify-center gap-1">
          Made with <span className="text-zinc-400 dark:text-zinc-600">♡</span>by Aastha Bharti
        </div>

      </div>
    </footer>
  );
};

export default Footer;