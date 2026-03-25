"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/buttonShad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComponentPreview = () => {
  return (
    <section className=" pb-24 w-full dark:bg-linear-to-b from-zinc-900 to-zinc-950 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 font-ubuntu"
          >
            Pre-built & Ready to Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-ubuntu"
          >
            Explore our vast library of premium components crafted for modern web experiences.
          </motion.p>
        </div>

        <Tabs defaultValue="auth" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl">
              <TabsTrigger value="auth" className="rounded-lg px-6 py-2">Auth & Forms</TabsTrigger>
              <TabsTrigger value="data" className="rounded-lg px-6 py-2">Data Display</TabsTrigger>
              <TabsTrigger value="feedback" className="rounded-lg px-6 py-2">Feedback</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="auth" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name" className="text-zinc-700 dark:text-zinc-300">Email Address</Label>
                      <Input id="name" placeholder="john@example.com" className="rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="pass" className="text-zinc-700 dark:text-zinc-300">Password</Label>
                      <Input id="pass" type="password" placeholder="••••••••" className="rounded-xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                    </div>
                    <Button className="w-full rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-6 text-lg hover:scale-[1.02] transition-transform">
                      Sign In
                    </Button>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white font-ubuntu">Smart Auth & Forms</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg font-ubuntu">
                  Beautifully designed inputs and forms with perfect accessibility and validation states.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Fully Accessible</Badge>
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Input Masks</Badge>
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Form Control</Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white font-ubuntu">Data Visualization</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg font-ubuntu">
                  Present your application data in the most engaging way possible with cards and badges.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Interactive Grid</Badge>
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Stunning Shadows</Badge>
                  <Badge variant="secondary" className="px-4 py-1 rounded-full">Glassmorphism</Badge>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-4 order-1 md:order-2"
              >
                <Card className="rounded-3xl bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-zinc-900 dark:text-white">Active Users</CardTitle>
                      <Badge className="bg-green-500/10 text-green-500 border-none">+12%</Badge>
                    </div>
                    <CardDescription>Global metrics for the last 24h</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tighter">24,592</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="mt-0">
            <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-950/50 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400 font-ubuntu">Many more components are waiting for you in the docs...</p>
              <Button variant="outline" className="mt-6 rounded-full px-8 border-zinc-300 dark:border-zinc-800">Explore Documentation</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComponentPreview;
