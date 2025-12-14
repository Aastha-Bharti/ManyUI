import { cn } from "@/lib/utils"

type ButtonPropType = { children: React.ReactNode, className?: string, onClick?: () => void }

export default function Btn({ children, className, onClick }: ButtonPropType) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}