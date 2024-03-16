import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

async function greet() {
  const webview = new WebviewWindow("second-window");
  webview.once("tauri://created", () => {
    setTimeout(() => webview.destroy(), 1000);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});
