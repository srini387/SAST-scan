// Intentional: dynamic code execution — SAST should flag
export function runUserFormula(expr) {
  return eval(expr);
}

export function createHandler(code) {
  return new Function("event", code);
}
