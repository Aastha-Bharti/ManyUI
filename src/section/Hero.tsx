
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Component, DockIcon, Zap } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="w-full h-screen bg-white dark:bg-linear-to-b dark:from-black  dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden px-8 pt-60 pb-30 text-center">

          {/* Decorative background elements from CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-300 dark:bg-blue-400/30 rounded-full blur-[120px] opacity-50" />

          <motion.div
            className="relative z-10 text-zinc-900 dark:text-white h-full w-full flex flex-col justify-center items-center gap-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="select-none font-ubuntu text-center text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter bg-linear-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent text-balance drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-300/20 dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-zinc-500 font-ubuntu leading-[1.05]">
               Elevate your <br className="hidden md:block" /> web projects today
            </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[18px] max-w-xl text-neutral-600 dark:text-neutral-500/80 text-center mb-5 font-ubuntu text-balance"
            >
              Launch sleek, responsive UIs in minutes using ready-to-use components
              built for speed, simplicity, and scalability.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-x-5 z-10">
              <Link
                href="/docs/components/ai-input"
                className="group inline-flex items-center gap-2 px-4 rounded-lg bg-linear-to-r from-zinc-700 to-zinc-300 dark:from-zinc-300 dark:to-zinc-700 text-white dark:text-zinc-900 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-950/20 transition-all duration-200 ease-in-out">
                
                <Component className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-white dark:text-zinc-900  text-sm">Explore Components</span>

              </Link>

              <Link
                href="/docs"

                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10 transition-all duration-200"
              >
                <DockIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-transform transition-colors duration-200 ease-in-out" />
                <span className="font-normal tracking-wider text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors duration-200 ease-in-out  text-sm">Documentation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;