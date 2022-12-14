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

btn.addEventListener("click", async () => {
  const { id, pw } = getInputData()
  if (!checkNullValue([id, pw])) return alert("null error")
  try {
    const { data } = await axios.post("http://210.90.136.10:3000/auth/login", { id : id, pw : pw } )
    data ? (window.location.href = "./index.html") : alert("err")
  } 
  catch (error) {
      console.log(error)
  }
})
