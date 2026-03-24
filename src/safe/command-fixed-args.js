import { execFileSync } from "node:child_process";

const HOSTNAME_RE = /^[a-zA-Z0-9.-]+$/;

// Safe: no shell, argv array, validated host
export function pingHost(hostname) {
  if (!HOSTNAME_RE.test(hostname)) throw new Error("Invalid hostname");
  return execFileSync("ping", ["-n", "1", hostname], { encoding: "utf8" });
}
