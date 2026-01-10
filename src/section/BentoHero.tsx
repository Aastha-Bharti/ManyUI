// import { BellIcon, Calendar, CalendarIcon, FileTextIcon, Share2Icon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import Button from "../../components/ui/button/button-03"
// import AiInput from "../../components/ui/ai-input/ai-input-01"
// import Background from "../../components/ui/background/bg-03"
// import { BentoCard, BentoGrid } from "@/components/ui/hero-bento/bento"



// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "#",
//     cta: "View",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//       <div className="absolute inset-0 flex items-center justify-center">

//         <Button className="scale-75 [--duration:20s] group-hover:scale-90" />


//       </div>
//     ),
//   },
//   {
//     Icon: BellIcon,
//     name: "Backgrounds",
//     description: "Get notified when something happens.",
//     href: "#",
//     cta: "View",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <Background className="h-[100px] w-full scale-50 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100" />
//       </div>
//     ),
//   },
//   {
//     Icon: Share2Icon,
//     name: "AiInput Boxes",
//     description: "Supports 100+ integrations and counting.",
//     href: "#",
//     cta: "View",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <AiInput className="h-[200px] scale-75 border-none transition-all duration-300 ease-out group-hover:scale-90" />
//       </div>
//     ),
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Cards",
//     description: "Use the calendar to filter your files by date.",
//     className: "col-span-3 lg:col-span-1",
//     href: "#",
//     cta: "View",
//     background: (
//       <div className="absolute inset-0 flex items-center justify-center">
//         <Calendar
//           mode="single"
//           className="origin-top scale-50 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-75"
//         />
//       </div>
//     ),
//   },
// ]

// export function BentoHero() {
//   return (
//     <BentoGrid>
//       {features.map((feature, idx) => (
//         <BentoCard key={idx} {...feature} />
//       ))}
//     </BentoGrid>
//   )
// }

import { BellIcon, Calendar, CalendarIcon, FileTextIcon, Share2Icon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/buttonShad" // Make sure this path is correct for your button
import AiInput from "../../components/ui/ai-input/ai-input-01"
import Background from "../../components/ui/background/bg-03"
import { BentoCard, BentoGrid } from "@/components/ui/hero-bento/bento-new"

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "View",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">

        <Button className="scale-75 [--duration:20s] group-hover:scale-90" />


      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Backgrounds",
    description: "Get notified when something happens.",
    href: "#",
    cta: "View",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Background className="h-[100px] w-full scale-50 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100" />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "AiInput Boxes",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "View",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <AiInput className="h-[200px] scale-75 border-none transition-all duration-300 ease-out group-hover:scale-90" />
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Cards",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Calendar
          mode="single"
          className="origin-top scale-50 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-75"
        />
      </div>
    ),
  },
]

export function BentoHero() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} className={feature.className}>
          {/* 1. Background Layer */}
          <div>{feature.background}</div>

          {/* 2. Main Content Layer */}
          <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <feature.Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {feature.name}
            </h3>
            <p className="max-w-lg text-neutral-400">{feature.description}</p>
          </div>

          {/* 3. CTA Button Layer (Slides up on hover) */}
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
              <a href={feature.href}>
                {feature.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* 4. Subtle Overlay Layer */}
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[0.03] group-hover:dark:bg-neutral-800/10" />
        </BentoCard>
      ))}
    </BentoGrid>
  )
}