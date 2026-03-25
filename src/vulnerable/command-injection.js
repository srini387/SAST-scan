import { execSync } from "node:child_process";

export function pingHost(hostname) {
  return execSync(`ping -n 1 ${hostname}`, { encoding: "utf8" });
}
