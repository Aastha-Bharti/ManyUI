import { cn } from "@/lib/utils";
import React from "react";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  const steps = React.Children.toArray(children);
  
  return (
    <div className={cn("space-y-4 my-4", className)}>
      {steps.map((step, index) => {
        if (React.isValidElement(step)) {
          return React.cloneElement(step as React.ReactElement<StepProps>, {
            key: index,
            // @ts-ignore
            stepNumber: index + 1,
          });
        }
        return step;
      })}
    </div>
  );
}

export function Step({ 
  children, 
  className,
  ...props 
}: StepProps & { stepNumber?: number }) {
  const stepNumber = (props as any).stepNumber;
  
  return (
    <div className={cn("flex gap-4 items-start", className)}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-semibold text-sm">
        {stepNumber}
      </div>
      <div className="flex-1 pt-1">
        {children}
      </div>
    </div>
  );
}