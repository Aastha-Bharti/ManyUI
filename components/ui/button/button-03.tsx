import { cn } from "@/lib/utils";

type ButtonPropType = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Btn({ className, onClick, children }: ButtonPropType) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden px-12 py-2 bg-neutral-900 outline-ring text-white rounded-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out active:scale-98 after:content-[''] after:w-1/2 after:h-[300px] after:bg-white/10 after:absolute after:-left-10 after:-top-6 after:rotate-10 after:-translate-x-10 after:backdrop-blur-[0.5px] hover:bg-neutral-800 hover:after:translate-x-[200%] after:duration-1000 after:transition-all shadow-sm shadow-black/60",
        className
      )}
    >
      {children || "Just another button"}
    </button>
  );
}
