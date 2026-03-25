import { execFileSync } from "node:child_process";

export function pingHost(hostname) {
  // Allow only common hostname/IP characters to reduce injection risk.
  if (!/^[a-zA-Z0-9.-]+$/.test(hostname)) {
    throw new Error("Invalid hostname");
  }

  // Use argv array (no shell) so user input is not interpreted as commands.
  return execFileSync("ping", ["-n", "1", hostname], { encoding: "utf8" });
}
