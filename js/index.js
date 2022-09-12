const loginBtn = document.querySelector("#clickSignUpBox")
const registerBtn = document.querySelector("#clickSignInBox")

const clickLoginBtn = () => {
  return (window.location.href = "../pages/register.html")
}

const clickRegisterBtn = () => {
  return (window.location.href = "../pages/login.html")
}

// const onClick = (event) => {
//   const { id } = event.target
//   if (id == "clickSignUpBox")
//     return (window.location.href = "../pages/register.html")
//   if (id == "clickSignInBox")
//     return (window.location.href = "../pages/login.html")
// }

loginBtn.addEventListener("click", clickLoginBtn)
registerBtn.addEventListener("click", clickRegisterBtn)
