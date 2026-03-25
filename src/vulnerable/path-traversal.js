import path from "node:path";
import fs from "node:fs";

// Intentional: user-controlled path — SAST should flag path traversal
export function readUserFile(baseDir, userFilename) {
  const fullPath = path.join(baseDir, userFilename);
  return fs.readFileSync(fullPath, "utf8");
}
