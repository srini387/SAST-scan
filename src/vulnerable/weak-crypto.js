import crypto from "node:crypto";

// Intentional: MD5 for integrity/security — SAST should flag weak hash
export function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

export function legacyMac(data, key) {
  return crypto.createHmac("md5", key).update(data).digest("hex");
}
