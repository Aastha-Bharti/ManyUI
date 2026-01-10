"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                // Base Layout & Shape
                "group relative overflow-hidden rounded-xl aspect-square",
                // Neutral Styling (clean, minimal)
                "border border-border/50 bg-background/50 backdrop-blur-[2px] text-foreground",
                // Hover Effects (reduced to just border and spotlight, no scaling)
                "transition-colors duration-300 hover:border-foreground/20",
                className
            )}
            {...props}
        >
            {/* Spotlight Overlay */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--spotlight-color, rgba(255,255,255,0.1)), transparent 40%)`,
                }}
            />

            {/* Content Container */}
            <div className="relative h-full w-full">{children}</div>
        </div>
    );
};