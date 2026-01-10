// import { ArrowRightIcon, PlusIcon } from "lucide-react";
// import { Button } from "@/components/ui/buttonShad";

// export function BentoMain() {
//     return (
//         <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
//             <PlusIcon
//                 className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
//                 strokeWidth={1}
//             />
//             <PlusIcon
//                 className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
//                 strokeWidth={1}
//             />
//             <PlusIcon
//                 className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
//                 strokeWidth={1}
//             />
//             <PlusIcon
//                 className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
//                 strokeWidth={1}
//             />

//             <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
//             <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

//             <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

//             {/* Content */}
//             <div className="space-y-6">
//                 <div className="space-y-2 text-center">
//                     <h2 className="font-bold text-3xl tracking-tight">
//                         Build Beautiful UIs Faster
//                     </h2>
//                     <p className="mx-auto max-w-2xl text-muted-foreground">
//                         A collection of stunning, reusable components built with React and Tailwind CSS.
//                         Copy, paste, and customize to match your design.
//                     </p>
//                 </div>

//                 {/* Feature Grid */}
//                 <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
//                     <div className="flex flex-col items-center gap-2 rounded-lg border bg-background/50 p-4 text-center backdrop-blur-sm">
//                         <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
//                             <svg
//                                 className="size-5 text-primary"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                                 />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-sm">Lightning Fast</h3>
//                         <p className="text-muted-foreground text-xs">
//                             Optimized for performance and speed
//                         </p>
//                     </div>

//                     <div className="flex flex-col items-center gap-2 rounded-lg border bg-background/50 p-4 text-center backdrop-blur-sm">
//                         <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
//                             <svg
//                                 className="size-5 text-primary"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//                                 />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-sm">Fully Customizable</h3>
//                         <p className="text-muted-foreground text-xs">
//                             Adapt components to your brand
//                         </p>
//                     </div>

//                     <div className="flex flex-col items-center gap-2 rounded-lg border bg-background/50 p-4 text-center backdrop-blur-sm">
//                         <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
//                             <svg
//                                 className="size-5 text-primary"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                                 />
//                             </svg>
//                         </div>
//                         <h3 className="font-semibold text-sm">Production Ready</h3>
//                         <p className="text-muted-foreground text-xs">
//                             Built with best practices in mind
//                         </p>
//                     </div>
//                 </div>

//                 {/* CTA Buttons */}
//                 <div className="flex items-center justify-center gap-3">
//                     <Button variant="outline" size="lg">
//                         View Components
//                     </Button>
//                     <Button size="lg">
//                         Get Started <ArrowRightIcon className="ml-2 size-4" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }
