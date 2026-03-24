// Intentional: unsanitized HTML — SAST should flag XSS
export function showMessage(container, userInput) {
  container.innerHTML = userInput;
}

export function renderTemplate(template, data) {
  const html = template.replace("{{name}}", data.name);
  document.body.insertAdjacentHTML("beforeend", html);
}
