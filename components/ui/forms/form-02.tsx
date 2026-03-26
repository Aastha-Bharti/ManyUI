"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/buttonShad";

export default function Form02() {
  return (
    <div>
<div className="p-8 rounded-3xl w-[40vw] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name" className="text-zinc-700 dark:text-zinc-300">Email Address</Label>
                      <Input id="name" placeholder="john@example.com" className="rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="pass" className="text-zinc-700 dark:text-zinc-300">Password</Label>
                      <Input id="pass" type="password" placeholder="••••••••" className="rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                    </div>
                    <Button className="w-full rounded-xl bg-zinc-800 dark:bg-white/70 text-white dark:text-zinc-900 py-6 text-md hover:scale-[1.0] transition-transform">
                      Sign In
                    </Button>
                  </div>
                </div>

    </div>
    
    
  );
}
