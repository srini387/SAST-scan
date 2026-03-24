// Safe: configuration from environment (no literals in repo)
export function getApiKey() {
  const key = process.env.API_KEY;
  if (!key) throw new Error("API_KEY is not set");
  return key;
}
