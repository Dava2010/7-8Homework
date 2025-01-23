let id = "пароль находится в консоле";
alert(id);
let password = "Password:1234, Login:Davlatbek";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const usernameInput = document.getElementById("input");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-btn");
  const togglePassword = document.getElementById("togglePassword");
  const errorMessage = document.getElementById("errorMessage");

  function setDefaultCredentials() {
    const defaultCredentials = {
      username: "Davlatbek",
      password: "1234",
    };
    localStorage.setItem("credentials", JSON.stringify(defaultCredentials));
    console.log(localStorage.getItem("credentials"));
  }

  setDefaultCredentials();

  function checkFields() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    submitButton.disabled = !(username && password);
  }

  usernameInput.addEventListener("input", checkFields);
  passwordInput.addEventListener("input", checkFields);

  togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "🙈";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "👁";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

    if (
      storedCredentials &&
      username === storedCredentials.username &&
      password === storedCredentials.password
    ) {
      window.location.href = "nextpage.html";
    } else {
      alert("Вы ввели невернй логин или пароль");
      errorMessage.textContent = "Login yoki parol noto'g'ri!";
      errorMessage.style.color = "red";
    }
  });
});
