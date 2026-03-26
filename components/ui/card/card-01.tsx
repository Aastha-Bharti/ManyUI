'use client'

import { MessageSquare, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const Card = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            onClick={(e) => e.stopPropagation()}
            className="text-black dark:text-white p-7 w-90 min-h-[70vh] rounded-xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.4)] flex flex-col bg-white/50 dark:bg-neutral-900/50 cursor-default"
          >
            <h1 className="font-bold text-sm font-mono tracking-wide">Example UI Components</h1>
            <p className="mt-1 mb-2 font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-tight">A collection of reusable UI components built with Tailwind CSS.</p>
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="text-xs font-mono mt-3 mb-1 shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_3px_3px_0px_rgba(255,255,255,0.05)] dark:bg-neutral-800 px-2 py-1 rounded-md cursor-pointer"
              >
                Button
                <X className="size-4 inline-block ml-1 mb-0.5 text-neutral-400 dark:text-neutral-500" />
              </button>
            </div>

            <div className="bg-gray-200/40 dark:bg-neutral-800/40 flex-1 mt-5 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-700 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 h-full w-full bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-200 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 overflow-y-auto"
              >
                <div className="text-md flex items-center p-5 gap-2">
                  <div className="size-7 shrink-0 bg-linear-to-br bg-white dark:bg-neutral-800 rounded-md flex items-center justify-center shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.3)]">
                    <MessageSquare className="size-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-neutral-600 dark:text-neutral-200 font-mono leading-tight ml-1">Example UI Components</p>
                    <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono leading-tight ml-1">
                      A Collection of components
                    </p>
                  </div>
                </div>

                <div className="text-md flex items-center p-5 gap-2">
                  <div className="size-7 shrink-0 bg-linear-to-br bg-white dark:bg-neutral-800 rounded-md flex items-center justify-center shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.3)]">
                    <MessageSquare className="size-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-neutral-600 dark:text-neutral-200 font-mono leading-tight ml-1">
                      Example UI Components
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono leading-tight ml-1">
                      A Collection of components
                    </p>
                  </div>
                </div>

                <div className="text-md flex items-center p-5 gap-2">
                  <div className="size-7 shrink-0 bg-linear-to-br bg-white dark:bg-neutral-800 rounded-md flex items-center justify-center shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.3)]">
                    <MessageSquare className="size-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-neutral-600 dark:text-neutral-200 font-mono leading-tight ml-1">
                      Example UI Components
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono leading-tight ml-1">
                      A Collection of components
                    </p>
                  </div>
                </div>

                <div className="text-md flex items-center p-5 gap-2">
                  <div className="size-7 shrink-0 bg-linear-to-br bg-white dark:bg-neutral-800 rounded-md flex items-center justify-center shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.3)]">
                    <MessageSquare className="size-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-neutral-600 dark:text-neutral-200 font-mono leading-tight ml-1">
                      Example UI Components
                    </p>
                    <p className="text-neutral-400 dark:text-neutral-500 text-xs font-mono leading-tight ml-1">
                      A Collection of components
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function CardWrapper() {
  const [open, setOpen] = useState(true)
  return (
    <div
      onClick={() => !open && setOpen(true)}
      className="h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-neutral-950 cursor-pointer"
    >
      <Card open={open} setOpen={setOpen} />
    </div>
  )
}