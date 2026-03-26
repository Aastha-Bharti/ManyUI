import { cn } from "@/lib/utils"

type ButtonPropType = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Btn({ children, className, onClick }: ButtonPropType) {
  return (
    <div
      className="
        inline-block group relative 
        bg-gradient-to-b from-black/10 to-white/10 
        dark:from-white/10 dark:to-black/10 
        p-px rounded-2xl backdrop-blur-lg 
        overflow-hidden shadow-lg hover:shadow-xl 
        transition-shadow duration-300
      "
    >
      <button
        className={cn(
          `rounded-[1.15rem] px-6 py-3 text-sm font-semibold backdrop-blur-md
          bg-white/95 hover:bg-white
          dark:bg-black/95 dark:hover:bg-black
          text-black dark:text-white
          transition-all duration-300
          group-hover:-translate-y-0.5
          border border-black/10 dark:border-white/10
          hover:shadow-md dark:hover:shadow-neutral-800/50
          tracking-tight cursor-pointer
          `,
          className
        )}
        onClick={onClick}
      >
        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
          {children ? children : "Button"}
        </span>
        <span
          className="
            ml-2 opacity-70 
            group-hover:opacity-100 
            group-hover:translate-x-1.5 
            transition-all duration-300
          "
        >
          →
        </span>
      </button>
    </div>
  )
}