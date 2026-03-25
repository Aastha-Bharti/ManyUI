"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/buttonShad";
import { ArrowRight, DockIcon, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 w-full bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden px-8 py-24 text-center ">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-300 dark:bg-blue-400/30 rounded-full blur-[120px] opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            

            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-zinc-500 font-ubuntu leading-[1.05]">
               Elevate your <br className="hidden md:block" /> web projects today
            </h2>

            <p className="text-md md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-ubuntu leading-relaxed">
              Experience the power of precision-crafted interfaces. Build faster, better, and more beautifully with ManyUI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center z-10 pt-8">
              <Link
                href="/docs/components/ai-input"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-linear-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10"
              >
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-sm">Explore Components</span>
              </Link>

              <Link
                href="/docs"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <DockIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors" />
                <span className="font-medium tracking-wide text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors text-sm">Documentation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;







// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, DockIcon, Zap } from "lucide-react";
// import Link from "next/link";

// const CTA = () => {
//   return (
//     <section className="py-24 w-full bg-white dark:bg-zinc-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Changed to rounded-[3rem] to round all four corners */}
//         <div className="relative overflow-hidden px-8 py-24 text-center rounded-[3rem]">
          
//           {/* Custom Bottom-Half Border */}
//           {/* Changed to rounded-[3rem] to match parent container */}
//           <div className="absolute inset-0 pointer-events-none rounded-[3rem] p-[1px] [background:linear-gradient(to_bottom,transparent_50%,rgba(161,161,170,0.5)_100%)] dark:[background:linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.1)_100%)]">
//             {/* Changed to rounded-[calc(3rem-1px)] to fit perfectly inside the border */}
//             <div className="absolute inset-[1px] bg-zinc-50 dark:bg-zinc-900/30 rounded-[calc(3rem-1px)]" />
//           </div>

//           {/* Decorative background elements */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-200 dark:bg-white/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative z-10 space-y-8"
//           >
//             <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-zinc-500 font-ubuntu leading-[1.05]">
//                Elevate your <br className="hidden md:block" /> web projects today
//             </h2>

//             <p className="text-md md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-ubuntu leading-relaxed">
//               Experience the power of precision-crafted interfaces. Build faster, better, and more beautifully with ManyUI.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center z-10 pt-8">
//               <Link
//                 href="/docs/components/ai-input"
//                 className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/10 dark:hover:shadow-zinc-100/10"
//               >
//                 <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//                 <span className="font-bold text-sm">Explore Components</span>
//               </Link>

//               <Link
//                 href="/docs"
//                 className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300 hover:scale-[1.02]"
//               >
//                 <DockIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors" />
//                 <span className="font-medium tracking-wide text-zinc-700 dark:text-zinc-500 group-hover:text-zinc-900 group-hover:dark:text-zinc-300 transition-colors text-sm">Documentation</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;





