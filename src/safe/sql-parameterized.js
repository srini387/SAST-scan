// Safe: parameterized-style API (no string concatenation of user values)
export function userQueryPlaceholder(userId) {
  return { text: "SELECT * FROM users WHERE id = $1", values: [userId] };
}

export function orderQuery() {
  const allowed = new Set(["created_at", "amount"]);
  const sortColumn = "created_at";
  if (!allowed.has(sortColumn)) throw new Error("Invalid sort");
  return { text: `SELECT * FROM orders ORDER BY ${sortColumn}` };
}
