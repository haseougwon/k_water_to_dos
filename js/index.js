const loginBtn = document.querySelector(".sign_in_btn")
const registerBtn = document.querySelector(".sign_up_btn")

const clickLoginBtn = () => {
  return (window.location.href = "../pages/login.html")
}

const clickRegisterBtn = () => {
  return (window.location.href = "../pages/register.html")
}

loginBtn.addEventListener("click", clickLoginBtn)
registerBtn.addEventListener("click", clickRegisterBtn)
