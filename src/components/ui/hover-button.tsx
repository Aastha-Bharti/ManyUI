"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"

type CSSVars = React.CSSProperties & {
  "--circle-start"?: string
  "--circle-end"?: string
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<Array<{
      id: number
      x: number
      y: number
      color: string
    }>>([])
    const lastAddedRef = React.useRef(0)

    // Merge internal and forwarded refs
    const setRefs = React.useCallback((node: HTMLButtonElement | null) => {
      buttonRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }, [ref])

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 1
      const xPos = x / buttonWidth

      const color = `linear-gradient(
        to right,
        var(--circle-start) ${xPos * 100}%,
        var(--circle-end) ${xPos * 100}%
      )`

      const newCircle = { id: Date.now(), x, y, color }
      setCircles((prev) => [...prev, newCircle])

      // Cleanup happens via AnimatePresence, but we can remove from state after exit animation duration 
      // to keep the array small if the user hovers for a VERY long time.
      setTimeout(() => {
        setCircles((prev) => prev.filter((c) => c.id !== newCircle.id))
      }, 2000)
    }, [])

    const handlePointerMove = React.useCallback(
      (e: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return

        const now = Date.now()
        // Throatle to 50ms for smoother trail than 100ms
        if (now - lastAddedRef.current > 50) {
          lastAddedRef.current = now
          const rect = e.currentTarget.getBoundingClientRect()
          createCircle(e.clientX - rect.left, e.clientY - rect.top)
        }
      },
      [isListening, createCircle]
    )

    return (
      <button
        ref={setRefs}
        className={cn(
          "relative isolate px-8 py-3 rounded-lg",
          "text-foreground font-medium text-base leading-6",
          "backdrop-blur-lg bg-[rgba(43,55,80,0.1)]",
          "cursor-pointer overflow-hidden",
          "before:content-[''] before:absolute before:inset-0",
          "before:rounded-[inherit] before:pointer-events-none",
          "before:z-1",
          "before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_16px_0_rgba(170,202,255,0.1),inset_0_-3px_12px_0_rgba(170,202,255,0.15),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.45)]",
          "before:mix-blend-multiply before:transition-transform before:duration-300",
          "active:before:scale-[0.975]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsListening(true)}
        onPointerLeave={() => setIsListening(false)}
        {...props}
        style={
          {
            "--circle-start": "var(--tw-gradient-from, #a0d9f8)",
            "--circle-end": "var(--tw-gradient-to, #3a5bbf)",
          } as CSSVars
        }
      >
        <AnimatePresence mode="popLayout">
          {circles.map(({ id, x, y, color }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-sm",
                "blur-xl pointer-events-none z-[-1]"
              )}
              style={{
                left: x,
                top: y,
                background: color,
              }}
            />
          ))}
        </AnimatePresence>
        <div className="relative z-10">{children}</div>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }