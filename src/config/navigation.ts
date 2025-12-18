export interface NavItem {
    id: string | number;
    title: string;
    href: string;
    description?: string;
    count?: number | string;
    isComingSoon?: boolean;
    isNew?: boolean;
    isLab?: boolean;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigationSections: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            {
                id: "intro01",
                title: "Introduction",
                href: "/docs",
                description: "Introduction to ManyUi",
            },
            {
                id: "intro02",
                title: "Installation",
                href: "/docs/installation",
                description: "Installation and usage guidelines",
            }
        ],
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title: "AI-Input",
                href: "/docs/components/ai-input",
                description: "Modern AI chat interface components",
                count: 8,
            },
            {
                id: 2,
                title: "Background",
                href: "/docs/components/backgrounds",
                description: "Modern background components with animations",
                count: 8,
            },
            {
                id: 3,
                title: "Button",
                href: "/docs/components/buttons",
                description: "Interactive button components with animations",
                count: 8,
            },
            {
                id: 4,
                title: "Card",
                href: "/docs/components/cards",
                description: "Versatile card components and layouts",
                count: 5,
            },
            {
                id: 5,
                title: "Carousel",
                href: "/docs/components/carousel",
                description: "Carousel components",
                count: 6,
            },
            {
                id: 6,
                title: "Loader",
                href: "/docs/components/loader",
                description: "Loader and spinner components",
                count: 8,
            },
            {
                id: 7,
                title: "Profile",
                href: "/docs/components/profile",
                description: "Profile components and cards",
                count: 1,
            },
            {
                id: 8,
                title: "Progress Bar",
                href: "/docs/components/progress-bar",
                description: "Progress bar components",
                count: 5,
                isNew: true,
            },
            
            {
                id: 9,
                title: "Text",
                href: "/docs/components/text",
                description: "Typography and text animation components",
                count: 6,
                isNew: true,
            },
        ],
    },
   
];