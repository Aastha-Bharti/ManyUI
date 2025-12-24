import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRight, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/buttonShad"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: LucideIcon
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      // common base styles
      "bg-white/5 dark:bg-black/5 backdrop-blur-xl border dark:border-neutral-800/60 border-neutral-200",
      // box-shadow - using shadow-sm for subtle depth, or a custom one if preferred
      "transition-all duration-300",
      // dark mode adjustments if needed, though bg-card usually handles it
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-7 w-7 origin-left transform-gpu text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-foreground" />
      <h3 className="text-lg font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto"
      >
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[0.03] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
