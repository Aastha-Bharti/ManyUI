
type ButtonPropType = { children: React.ReactNode, className?: string, onClick?: () => void }

export default function Btn({children, className, onClick }: ButtonPropType) {
    return (
        <button className="px-12 py-2 bg-black text-white rounded-md relative cursor-pointer group overflow-visible transition-all duration-300">
          <div className="absolute h-px w-full bg-linear-to-r from-transparent via-yellow-500 to-transparent -bottom-px inset-x-0">
            <div
              className="absolute h-px w-full -bottom-px inset-x-0  before:content-[''] before:absolute before:left-1/2 before:top-1/2
                        before:-translate-x-1/2 before:-translate-y-3/4 before:h-px before:w-2/4 before:bg-transparent before:transition-all before:duration-300
                        group-hover:before:shadow-[0_-10px_40px_5px_rgba(251,191,36,0.3)]"
            ></div>
          </div>
          Hover me
        </button>
    )
}