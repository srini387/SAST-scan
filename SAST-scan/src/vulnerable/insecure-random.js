// Intentional: weak randomness for security context — SAST may flag
export function generateSessionToken() {
  return Math.random().toString(36).slice(2);
}

export function pickCsrfToken() {
  return String(Math.floor(Math.random() * 1e9));
}
