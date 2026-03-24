import path from "node:path";
import fs from "node:fs";

// Safe: resolve and keep file path inside base directory
export function readUserFile(baseDir, userFilename) {
  const resolvedBase = path.resolve(baseDir);
  const fullPath = path.resolve(resolvedBase, userFilename);
  if (!fullPath.startsWith(resolvedBase + path.sep) && fullPath !== resolvedBase) {
    throw new Error("Path escapes base directory");
  }
  return fs.readFileSync(fullPath, "utf8");
}
