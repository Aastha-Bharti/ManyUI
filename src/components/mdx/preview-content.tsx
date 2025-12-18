"use client";

import {
    useActionState,
    useEffect,
    useState,
    useTransition,
    useRef,
    type RefObject,
} from "react";
import { Button } from "@/components/ui/buttonShad";
import { Copy, Check, CheckCheck, Terminal, Code, AppWindow, Code2 } from "lucide-react";
import { copyComponent } from "@/lib/action";
import { cn } from "@/lib/utils";
import { OpenInV0Button } from "@/components/ui/openInV0Button";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";

export default function PreviewContent({
    link,
    prePath,
    isBlock = false,
    activeTab,
    setActiveTab,
}: {
    link: string;
    prePath: string;
    isBlock?: boolean;
    activeTab: "preview" | "code";
    setActiveTab: (tab: "preview" | "code") => void;
}) {
    const [isPending, startTransition] = useTransition();
    const [state, formAction] = useActionState(copyComponent, {
        error: "",
        content: "",
        success: false,
    });
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTerminalCopied, setIsTerminalCopied] = useState(false);

    const handleCopyClick = async () => {
        const [folder, filename] = link.split("/");

        startTransition(async () => {
            const formData = new FormData();
            formData.append("folder", folder);
            formData.append("fileName", filename);

            formAction(formData);
        });
    };

    const getFileName = () => {
        const [folder, filename] = link.split("/");
        return filename ? filename : folder;
    };

    const handleTerminalClick = () => {
        const [folder, filename] = link.split("/");
        const COPY = `bunx shadcn@latest add ${prePath}/r/${filename ? filename : folder
            }.json`;
        navigator.clipboard.writeText(COPY);
        toast.success("Command copied to clipboard");
        setIsTerminalCopied(true);
        setTimeout(() => {
            setIsTerminalCopied(false);
        }, 1000);
    };

    const openInV0 = () => {
        const [folder, filename] = link.split("/");

        return filename ? filename : folder;
    };

    useEffect(() => {
        if (state.error) {
            setShowLoginDialog(true);
        }
        if (state.success && state.content) {
            setIsCopied(true);
            navigator.clipboard.writeText(state.content);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [state]);

    function SuccessParticles({
        buttonRef,
    }: {
        buttonRef: React.RefObject<HTMLButtonElement>;
    }) {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (!rect) return null;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        return (
            <AnimatePresence>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="fixed w-1 h-1 bg-black dark:bg-white rounded-full"
                        style={{ left: centerX, top: centerY }}
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            x: [
                                0,
                                (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
                            ],
                            y: [0, -Math.random() * 50 - 20],
                        }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </AnimatePresence>
        );
    }

    const terminalButtonRef = useRef<HTMLButtonElement>(null);
    const copyButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            {isTerminalCopied && (
                <SuccessParticles
                    buttonRef={terminalButtonRef as RefObject<HTMLButtonElement>}
                />
            )}
            {isCopied && (
                <SuccessParticles
                    buttonRef={copyButtonRef as RefObject<HTMLButtonElement>}
                />
            )}

            <div
                className={cn("relative border-b border-zinc-200 dark:border-zinc-800 pb-0")}
            >
                <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center">
                        <Button
                            onClick={() => setActiveTab("preview")}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-9 px-4 text-sm font-medium rounded-md transition-all relative outline-none ring-0 focus-visible:ring-0 overflow-hidden group hover:text-zinc-900 dark:hover:text-zinc-50",
                                activeTab === "preview"
                                    ? "text-zinc-950 dark:text-zinc-50"
                                    : "text-zinc-500 dark:text-zinc-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 hover:after:h-full after:bg-zinc-100 dark:after:bg-zinc-800 after:transition-all after:duration-[3000ms] after:ease-out after:rounded-t-md after:-z-10"
                            )}
                        >
                            <AppWindow className="h-4 w-4 relative z-10" />
                            <span className="relative z-10">Preview</span>
                            {activeTab === "preview" && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    transition={{
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.6,
                                    }}
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-950 dark:bg-zinc-50 z-20"
                                />
                            )}
                        </Button>
                        <Button
                            onClick={() => setActiveTab("code")}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-9 px-4 text-sm font-medium rounded-md transition-all relative outline-none ring-0 focus-visible:ring-0 overflow-hidden group hover:text-zinc-900 dark:hover:text-zinc-50",
                                activeTab === "code"
                                    ? "text-zinc-950 dark:text-zinc-50"
                                    : "text-zinc-500 dark:text-zinc-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 hover:after:h-full after:bg-zinc-100 dark:after:bg-zinc-800 after:transition-all after:duration-3000 after:ease-out after:rounded-t-md after:-z-10"
                            )}
                        >
                            <Code2 className=" h-4 w-4 relative z-10" />
                            <span className="relative z-10">Code</span>
                            {activeTab === "code" && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    transition={{
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.6,
                                    }}
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-950 dark:bg-zinc-50 z-20"
                                />
                            )}
                        </Button>
                    </div>


                    <div className="flex items-center gap-2">

                        <OpenInV0Button name={openInV0()} />
                        <Button
                            ref={terminalButtonRef}
                            onClick={handleTerminalClick}
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "relative overflow-hidden",
                                "h-7 px-3 text-xs font-medium",
                                "bg-black dark:bg-white",
                                "text-white dark:text-black",
                                "hover:bg-black/90 dark:hover:bg-white/90",
                                "hover:text-white dark:hover:text-black",
                                "transition-all duration-200",
                                "group flex items-center gap-1",
                                "rounded-lg",
                                "shadow-none"
                            )}
                        >
                            {isTerminalCopied ? (
                                <>
                                    <CheckCheck className="h-3.5 w-3.5 text-white dark:text-black" />
                                </>
                            ) : (
                                <Terminal
                                    className={cn(
                                        "h-3.5 w-3.5",
                                        "transition-all duration-200",
                                        "group-hover:rotate-12"
                                    )}
                                />
                            )}
                            <span>npx shadcn add {getFileName()}</span>
                        </Button>


                    </div>
                </div>
            </div>
        </>
    );
}