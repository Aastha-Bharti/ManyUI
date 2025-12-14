import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My App',
    },
    links: [],
    // disable the sidebar banner (title) since we have it in navbar
  
  };
}                                                   