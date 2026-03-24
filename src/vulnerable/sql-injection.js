// Safe: parameterized query object, no user value interpolation
export function buildUserQuery(userId) {
  return { text: "SELECT * FROM users WHERE id = $1", values: [userId] };
}

// Safe: only allow known sort columns
export function runReport(sortColumn) {
  if (sortColumn === "created_at") {
    return { text: "SELECT * FROM orders ORDER BY created_at" };
  }
  if (sortColumn === "amount") {
    return { text: "SELECT * FROM orders ORDER BY amount" };
  }
  throw new Error("Invalid sort column");
}
