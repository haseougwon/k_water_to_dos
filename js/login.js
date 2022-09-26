const inputId = document.querySelector(".user_id")
const inputPw = document.querySelector(".user_pw")
const btn = document.querySelector(".sign_in_btn")

const getInputData = () => {
  return { id: inputId.value, pw: inputPw.value }
}

const checkNullValue = (arr) => {
  for (const value of arr) {
    if (!value) return false
  }
  return true
}

btn.addEventListener("click", () => {
  const { id, pw } = getInputData()
  if (!checkNullValue([id, pw])) return alert("null error")

  axios({
    method: "post",
    url: "http://210.90.136.10:3000/auth/login",
    data: { id: id, pw: pw },
  })
    .then((res) => {
      if (!res.data) alert("err")
      else window.location.replace("./main.html")
    })
    .catch((err) => console.log(err))
})
