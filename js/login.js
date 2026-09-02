(() => {
  // ★ここだけ変更してください。
  // これは「簡易的な合言葉」です。本格的な認証ではありません。
  const PASSWORD = "CHANGE-ME";

  const AUTH_KEY = "psng-auth-v1";
  const form = document.getElementById("password-form");
  const input = document.getElementById("password");
  const message = document.getElementById("password-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "ok");

      const returnUrl = sessionStorage.getItem("psng-return-url");
      sessionStorage.removeItem("psng-return-url");

      window.location.replace(returnUrl || "index.html");
      return;
    }

    message.textContent = "PASSWORD が違います。";
    input.select();
  });
})();
