"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, PenTool } from "lucide-react";

const features = [
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Highly Customizable",
    description: "Built with Tailwind CSS. Easily tweak colors, spacing, and styles to perfectly match your brand's unique identity.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive by Default",
    description: "Every component is meticulously designed to look great and function perfectly on any device or screen size.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Copy, Paste, Ship",
    description: "Skip the bloated dependencies. Just copy the code you need and jump straight into building your features.",
  },
];

const Features = () => {
  return (
    <section className="py-24 w-full bg-white dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4 font-ubuntu tracking-tight"
          >
            Everything you need for a premium UI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-ubuntu"
          >
            ManyUI provides the foundational building blocks to construct modern web interfaces with ease and velocity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden px-8 py-16 text-center rounded-[2.5rem] group min-h-[400px]"
            >
              {/* Custom Bottom-Half Border matching CTA */}
              <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] p-[1px] [background:linear-gradient(to_bottom,transparent_40%,rgba(161,161,170,0.4)_100%)] dark:[background:linear-gradient(to_bottom,transparent_40%,rgba(255,255,255,0.12)_100%)] transition-all duration-500 group-hover:[background:linear-gradient(to_bottom,transparent_30%,rgba(161,161,170,0.8)_100%)] dark:group-hover:[background:linear-gradient(to_bottom,transparent_30%,rgba(255,255,255,0.3)_100%)]">

                {/* Inner Background */}
                <div className="absolute inset-[1px] bg-zinc-50/50 dark:bg-[#0c0c0e] rounded-[calc(2.5rem-1px)] transition-colors duration-500 group-hover:bg-zinc-100/50 dark:group-hover:bg-zinc-900/40" />
              </div>

              {/* Optional: Subtle glow effect on hover behind the icon */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-zinc-300 dark:bg-white/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-500 ease-out">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 font-ubuntu tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-ubuntu leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;