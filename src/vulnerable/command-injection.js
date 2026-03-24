import { execFileSync } from "node:child_process";

export function pingHost(hostname) {
  if (!/^[a-zA-Z0-9.-]+$/.test(hostname)) {
    throw new Error("Invalid hostname");
  }

  return execFileSync("ping", ["-n", "1", hostname], { encoding: "utf8" });
}
