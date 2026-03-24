// Intentional: hardcoded credentials — SAST should flag secret exposure
const API_KEY = "sk_live_0123456789abcdef";
const ADMIN_PASSWORD = "SuperSecretAdmin123!";

export function getApiKey() {
  return API_KEY;
}

export function connectOptions() {
  return { password: ADMIN_PASSWORD };
}
