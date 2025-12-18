// "use client"

// import {
//   CircleCheckIcon,
//   InfoIcon,
//   Loader2Icon,
//   OctagonXIcon,
//   TriangleAlertIcon,
// } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Toaster as Sonner, type ToasterProps } from "sonner"

// const Toaster = ({ ...props }: ToasterProps) => {
//   const { theme = "system" } = useTheme()

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group"
//       expand={false}
//       icons={{
//         success: <CircleCheckIcon className="size-3.5" />,
//         info: <InfoIcon className="size-3.5" />,
//         warning: <TriangleAlertIcon className="size-3.5" />,
//         error: <OctagonXIcon className="size-3.5" />,
//         loading: <Loader2Icon className="size-3.5 animate-spin" />,
//       }}
//       toastOptions={{
//         classNames: {
//           toast:
//             "group toast group-[.toaster]:bg-background/80 group-[.toaster]:backdrop-blur-md group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-sm group-[.toaster]:rounded-lg group-[.toaster]:px-3 group-[.toaster]:py-2 group-[.toaster]:text-xs group-[.toaster]:transition-all group-[.toaster]:duration-200",
//           description: "group-[.toast]:text-muted-foreground",
//           actionButton:
//             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
//           cancelButton:
//             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
//           success: "group-[.toaster]:border-zinc-200 dark:group-[.toaster]:border-zinc-800",
//           error: "group-[.toaster]:border-zinc-200 dark:group-[.toaster]:border-zinc-800",
//         },
//       }}
//       {...props}
//     />
//   )
// }

// export { Toaster }

"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      expand={false}
      icons={{
        success: <CircleCheckIcon className="size-3.5 motion-safe:animate-in motion-safe:zoom-in-75" />,
        info: <InfoIcon className="size-3.5" />,
        warning: <TriangleAlertIcon className="size-3.5" />,
        error: <OctagonXIcon className="size-3.5 motion-safe:animate-in motion-safe:shake-x" />,
        loading: <Loader2Icon className="size-3.5 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            [
              // Base
              "group toast relative overflow-hidden",
              "bg-background/80 backdrop-blur-md text-foreground",
              "border border-border rounded-xl px-3 py-2 text-xs shadow-sm",

              // Motion — enter
              "data-[state=open]:animate-in",
              "data-[state=open]:fade-in-0",
              "data-[state=open]:slide-in-from-top-2",
              "data-[state=open]:zoom-in-95",

              // Motion — exit
              "data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0",
              "data-[state=closed]:slide-out-to-top-1",
              "data-[state=closed]:zoom-out-95",

              // Timing
              "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            ].join(" "),

          description:
            "text-muted-foreground leading-relaxed",

          actionButton:
            "bg-primary text-primary-foreground rounded-md px-2 py-1 text-[11px] transition-colors hover:opacity-90",

          cancelButton:
            "bg-muted text-muted-foreground rounded-md px-2 py-1 text-[11px] hover:bg-muted/80",

          success:
            "border-zinc-200 dark:border-zinc-800",

          error:
            "border-zinc-200 dark:border-zinc-800",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
