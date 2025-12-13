import { registry } from "../registry";
import { promises as fs } from "fs";
import path from "path";
const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";
async function main() {
  // Ensure output directory exists
  await fs.mkdir(PUBLIC_FOLDER_BASE_PATH, { recursive: true });
  for (const component of registry) {
    const files = component.files;
    if (!files) continue;
    const filesArray = await Promise.all(
      files.map(async (file) => {
        const filePath = typeof file === "string" ? file : file.path;
        const fullPath = path.join(REGISTRY_BASE_PATH, filePath);
        const content = await fs.readFile(fullPath, "utf-8");
        const fileName = path.basename(filePath);
        return {
          path: filePath,
          content,
          type: typeof file === "string" ? component.type : file.type,
          target: typeof file === "string" 
            ? `/components/ui/${fileName}` 
            : (file.target || `/components/ui/${fileName}`),
        };
      })
    );
    const payload = {
      ...component,
      files: filesArray,
    };
    const jsonPath = path.join(PUBLIC_FOLDER_BASE_PATH, `${component.name}.json`);
    await fs.writeFile(jsonPath, JSON.stringify(payload, null, 2), "utf-8");
    console.log(`Generated ${component.name}.json`);
  }
}
main().catch(console.error);