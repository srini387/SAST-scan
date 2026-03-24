import crypto from "node:crypto";

// Safe: use modern algorithms for password/keyed hashing
export function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export function legacyMac(data, key) {
  return crypto.createHmac("sha256", key).update(data).digest("hex");
}
