// Safe: parse and compute simple arithmetic expressions with a strict parser
export function runUserFormula(expr) {
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    throw new Error("Invalid expression");
  }

  const tokens = expr.replace(/\s+/g, "").match(/\d+(?:\.\d+)?|[()+\-*/]/g) ?? [];
  const output = [];
  const ops = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  for (const token of tokens) {
    if (/^\d/.test(token)) {
      output.push(Number(token));
      continue;
    }

    if (token === "(") {
      ops.push(token);
      continue;
    }

    if (token === ")") {
      while (ops.length && ops[ops.length - 1] !== "(") {
        output.push(ops.pop());
      }
      if (ops.pop() !== "(") throw new Error("Mismatched parentheses");
      continue;
    }

    while (
      ops.length &&
      ops[ops.length - 1] !== "(" &&
      precedence[ops[ops.length - 1]] >= precedence[token]
    ) {
      output.push(ops.pop());
    }
    ops.push(token);
  }

  while (ops.length) {
    const op = ops.pop();
    if (op === "(" || op === ")") throw new Error("Mismatched parentheses");
    output.push(op);
  }

  const stack = [];
  for (const item of output) {
    if (typeof item === "number") {
      stack.push(item);
      continue;
    }
    const b = stack.pop();
    const a = stack.pop();
    if (a === undefined || b === undefined) throw new Error("Invalid expression");
    if (item === "+") stack.push(a + b);
    if (item === "-") stack.push(a - b);
    if (item === "*") stack.push(a * b);
    if (item === "/") stack.push(a / b);
  }

  if (stack.length !== 1 || !Number.isFinite(stack[0])) {
    throw new Error("Invalid expression");
  }
  return stack[0];
}

export function createHandler(code) {
  if (code !== "stopPropagation" && code !== "preventDefault") {
    throw new Error("Unsupported handler operation");
  }

  return function handler(event) {
    if (code === "stopPropagation") event.stopPropagation();
    if (code === "preventDefault") event.preventDefault();
  };
}
