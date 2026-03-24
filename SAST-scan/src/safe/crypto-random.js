import crypto from "node:crypto";

// Safe: cryptographically strong random for tokens
export function generateSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}
