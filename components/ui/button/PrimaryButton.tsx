import { cn } from "@/lib/utils"

type ButtonPropType = { children: React.ReactNode, className?: string, onClick?: () => void }

export default function Btn({ children, className, onClick }: ButtonPropType) {
    return (
        <button
            className={cn(
                "bg-[#3b7ce5] hover:bg-[#1669C1] px-4 py-2 rounded-lg text-sm text-white font-semibold font-primary text-center shadow-lg text-shadow-md tracking-tight cursor-pointer transition-all duration-200 relative",
                className
            )}
            onClick={onClick}
        >
            Simple button
        </button>
    )
}