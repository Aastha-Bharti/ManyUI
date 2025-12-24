"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverButton } from "@/components/ui/hover-button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, DockIcon, Zap } from "lucide-react";

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
    <div className="h-screen w-full">
      <motion.div
        className="relative z-10 text-zinc-900 dark:text-white h-full w-full flex flex-col justify-center items-center gap-y-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"

      >
        <motion.h1
          variants={itemVariants}
          className="select-none bg-linear-to-b font-ubuntu from-neutral-900 to-neutral-600 bg-clip-text text-center text-lg font-extrabold text-transparent dark:from-neutral-400 dark:to-neutral-900 md:text-7xl lg:text-[5rem]"
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          Build Beautiful UI Faster
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[18px] max-w-xl text-neutral-600 dark:text-neutral-500 text-center mb-5 font-ubuntu"
        >
          Launch sleek, responsive UIs in minutes using ready-to-use components
          built for speed, simplicity, and scalability.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-x-5 z-10">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 px-4 rounded-lg bg-linear-to-r from-zinc-900 to-zinc-800 dark:from-zinc-300 dark:to-zinc-700 text-white dark:text-zinc-900 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-100/20 transition-all duration-200 ease-in-out">
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-white dark:text-zinc-900  text-sm">Explore Components</span>

          </Link>

          <Link
            href="#"
            target="_blank"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                            border border-zinc-200 dark:border-zinc-800
                            hover:bg-zinc-100 dark:hover:bg-zinc-800/50
                            hover:shadow-lg hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10
                            transition-all duration-200"
          >
            <DockIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-transform transition-colors duration-200 ease-in-out" />
            <span className="font-normal tracking-wider text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors duration-200 ease-in-out  text-sm">Documentation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <BackgroundBeams />
      </motion.div>
    </div>
  );
};

export default Hero;
