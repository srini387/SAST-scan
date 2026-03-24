// Safe: load secrets from environment at runtime
function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

export function getApiKey() {
  return requiredEnv("API_KEY");
}

export function connectOptions() {
  return { password: requiredEnv("ADMIN_PASSWORD") };
}
