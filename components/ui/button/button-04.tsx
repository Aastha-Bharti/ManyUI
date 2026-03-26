
import { cn } from "@/lib/utils"

type ButtonPropType = { children: React.ReactNode, className?: string, onClick?: () => void }

export default function Btn({className, onClick }: ButtonPropType) {
    return (
        

        <button
            className={cn("text-xs px-7 py-3 font-mono mt-3 mb-1 shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] rounded-md cursor-pointer text-black  dark:text-white dark:shadow-[0px_3px_3px_rgba(255,255,255,0.25)]",className )}
            onClick={onClick}>
            Button
        </button>
        
    )
}