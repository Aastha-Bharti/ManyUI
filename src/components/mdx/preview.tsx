"use client";

import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";
import { useState, useEffect, useRef } from "react";
import { copyComponent } from "@/lib/action";
import { Button } from "@/components/ui/buttonShad";
import { CheckCheck, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { motion, AnimatePresence } from "motion/react";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://many-ui.vercel.app/";

export function Preview({
  children,
  className = "",
  link,
  useIframe = false,
  compact = false,
  isBlock = false,
}: PreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [code, setCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const getFileName = () => {
    const [folder, filename] = link.split("/");
    return filename ? `${filename}.tsx` : `${folder}.tsx`;
  };

  useEffect(() => {
    if (activeTab === "code" && !code && !isLoading) {
      setIsLoading(true);
      const [folder, filename] = link.split("/");
      const formData = new FormData();
      if (folder) formData.append("folder", folder);
      if (filename) formData.append("fileName", filename);

      copyComponent({ error: "", content: "", success: false }, formData)
        .then((res) => {
          if (res.success) {
            setCode(res.content);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [activeTab, code, link, isLoading]);

  return (
    <div className={cn("w-full", className)}>
      <PreviewContent
        link={link}
        prePath={prePath}
        isBlock={isBlock}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-4">
        {activeTab === "preview" ? (
          <div className="relative">
            <motion.div
              key="preview-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {useIframe ? (
                <div className="w-full border rounded-xl border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  <div className="relative w-full h-dvh overflow-hidden">
                    <iframe
                      title={link}
                      src={`${prePath}/preview/${link}`}
                      className="w-full h-full overflow-y-auto list-none"
                      style={{
                        border: "none",
                        transform: "scale(0.95)",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={cn(
                    "p-2 md:p-8 flex justify-center items-center relative border rounded-xl border-zinc-200 dark:border-zinc-800 not-prose",
                    compact ? "min-h-25" : "min-h-100",
                    isBlock ? "md:p-0" : ""
                  )}
                >
                  {children}
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          <div className="w-full relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 font-mono">
                {getFileName()}
              </span>
              <Button
                onClick={handleCopy}
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                aria-label="Copy code"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isCopied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
            <div className="relative min-h-[100px]">
              <AnimatePresence mode="wait">
                {!code ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 flex items-center justify-center"
                  >
                    <div className="h-5 w-5 border-2 border-zinc-800 border-t-zinc-400 rounded-full animate-spin" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 overflow-x-auto"
                  >
                    <Highlight
                      theme={themes.vsDark}
                      code={code}
                      language="tsx"
                    >
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={{ ...style, background: "transparent" }} className={cn(className, "text-sm font-mono")}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}