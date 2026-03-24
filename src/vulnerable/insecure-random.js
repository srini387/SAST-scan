import crypto from "node:crypto";

// Safe: cryptographically secure random values for tokens
export function generateSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function pickCsrfToken() {
  return crypto.randomInt(0, 1_000_000_000).toString();
}
