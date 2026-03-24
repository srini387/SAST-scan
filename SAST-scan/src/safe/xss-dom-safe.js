// Safe: text nodes instead of raw HTML
export function showMessage(container, userInput) {
  container.textContent = userInput;
}

export function renderName(name) {
  const el = document.createElement("span");
  el.textContent = name;
  return el;
}
