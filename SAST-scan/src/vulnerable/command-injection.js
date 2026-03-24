import { execSync } from "node:child_process";

// Intentional: shell with user input — SAST should flag command injection
export function pingHost(hostname) {
  return execSync(`ping -n 1 ${hostname}`, { encoding: "utf8" });
}
