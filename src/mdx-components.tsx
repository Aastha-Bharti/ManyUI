import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Preview } from '@/components/mdx/preview';
import {Steps, Step} from '@/components/mdx/steps';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Preview,
    Step,
    Steps,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
  };
}