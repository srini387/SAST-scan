// Intentional: concatenated query — SAST should flag SQL injection risk
export function buildUserQuery(userId) {
  return `SELECT * FROM users WHERE id = '${userId}'`;
}

export function runReport(sortColumn) {
  return "SELECT * FROM orders ORDER BY " + sortColumn;
}
