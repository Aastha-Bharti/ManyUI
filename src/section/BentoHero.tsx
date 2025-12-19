import { BellIcon, Calendar, CalendarIcon, FileTextIcon, Share2Icon } from "lucide-react"

import { cn } from "@/lib/utils"
import Button from "../../components/ui/button/button-03"
import AiInput from "../../components/ui/ai-input/ai-input-01"
import Background from "../../components/ui/background/bg-03"
import { BentoCard, BentoGrid } from "@/components/ui/hero-bento/bento"



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
        
        <Button className="scale-75 [--duration:20s] group-hover:scale-90"/>
          
       
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
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}

