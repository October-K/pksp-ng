(() => {
  const AUTH_KEY = "psng-auth-v1";

  if (localStorage.getItem(AUTH_KEY) === "ok") return;

  // Remember the exact page the visitor tried to open.
  sessionStorage.setItem("psng-return-url", window.location.href);

  const currentScript = document.currentScript;
  const loginPath = currentScript?.dataset?.login || "login.html";

  window.location.replace(loginPath);
})();
