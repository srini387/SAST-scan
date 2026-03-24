export const samples = {
  vulnerable: [
    "vulnerable/sql-injection.js",
    "vulnerable/xss-dom.js",
    "vulnerable/hardcoded-secret.js",
    "vulnerable/eval-dynamic.js",
    "vulnerable/path-traversal.js",
    "vulnerable/command-injection.js",
    "vulnerable/insecure-random.js",
    "vulnerable/weak-crypto.js",
  ],
  safe: [
    "safe/sql-parameterized.js",
    "safe/xss-dom-safe.js",
    "safe/secrets-from-env.js",
    "safe/json-parse-static.js",
    "safe/path-sanitized.js",
    "safe/command-fixed-args.js",
    "safe/crypto-random.js",
    "safe/crypto-strong.js",
  ],
};

export function describeSamples() {
  return {
    vulnerableCount: samples.vulnerable.length,
    safeCount: samples.safe.length,
    purpose: "Compare SAST findings on vulnerable/* vs false positives on safe/*",
  };
}
