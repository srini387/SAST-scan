import crypto from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(crypto.scrypt);

// Safe: slow KDF for passwords (not MD5)
export async function hashPassword(password, salt) {
  const buf = await scryptAsync(password, salt, 64);
  return buf.toString("base64");
}

export function hmacSha256(data, key) {
  return crypto.createHmac("sha256", key).update(data).digest("hex");
}
