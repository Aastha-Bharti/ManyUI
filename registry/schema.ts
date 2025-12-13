import { z } from "zod";
export const registryItemTypeSchema = z.enum([
  "registry:component",
  "registry:hook",
  "registry:lib",
  "registry:block",
]);
export const registryItemFileSchema = z.union([
  z.string(),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: registryItemTypeSchema,
    target: z.string().optional(),
  }),
]);
export const registryEntrySchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  dependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
});
export const registrySchema = z.array(registryEntrySchema);
export type Registry = z.infer<typeof registrySchema>;