
import { cn } from "@/lib/utils"

type ButtonPropType = { children: React.ReactNode, className?: string, onClick?: () => void }

export default function Btn({className, onClick }: ButtonPropType) {
    return (
        <button
            className={cn("px-4 py-2 rounded-xl border border-neutral-800 text-gray-800  dark:text-white cursor-pointer relative",className )}
            onClick={onClick}>
            <div className="absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-sky-500 to-transparent "></div>
            Join the waitlist{" "}
        </button>
    )
}
