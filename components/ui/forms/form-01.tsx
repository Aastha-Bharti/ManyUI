
"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Form01() {
  return (
    <div className="w-full max-w-sm mx-auto p-8 rounded-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-none relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-zinc-100 dark:bg-zinc-800/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-8 ">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 font-ubuntu tracking-tight">
            Login
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-ubuntu">
            Enter your credentials to access your account.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 ml-1"
            >
              Email
            </label>
            <div className="relative group">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-900 dark:group-focus-within:text-zinc-100 transition-colors" />
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-zinc-900/5 dark:focus:ring-zinc-100/5 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label 
                htmlFor="password" 
                className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                Password
              </label>
              <a href="#" className="text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Forgot?
              </a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-900 dark:group-focus-within:text-zinc-100 transition-colors" />
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-4 focus:ring-zinc-900/5 dark:focus:ring-zinc-100/5 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-1">
            <div className="relative flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="peer appearance-none w-5 h-5 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 checked:bg-zinc-900 dark:checked:bg-zinc-100 checked:border-zinc-900 dark:checked:border-zinc-100 transition-all duration-300 cursor-pointer"
              />
              <svg
                className="absolute w-3.5 h-3.5 text-white dark:text-zinc-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <label htmlFor="remember" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 cursor-pointer select-none">
              Keep me signed in
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full relative group py-4 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-bold text-sm shadow-xl shadow-zinc-900/20 dark:shadow-none overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-zinc-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-ubuntu">
            New here?{" "}
            <a href="#" className="font-bold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

