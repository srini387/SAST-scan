// Safe: write untrusted input as text, not HTML
export function showMessage(container, userInput) {
  container.textContent = userInput;
}

export function renderTemplate(template, data) {
  const html = template.replace("{{name}}", String(data.name ?? ""));
  const node = document.createElement("div");
  node.textContent = html;
  document.body.appendChild(node);
}
