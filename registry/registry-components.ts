import type { Registry } from "./schema";
export const components: Registry = [
  {
    name: "btn",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/ui/buttons/btn.tsx",
        type: "registry:component",
      },
    ],
  },
];