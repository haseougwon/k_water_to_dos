const id = document.querySelector(".user_id")
const pw = document.querySelector(".user_pw")
const pwc = document.querySelector(".user_pwc")
const name = document.querySelector(".user_name")
const btn = document.querySelector(".sign_up_btn")

/**
 * PW, PWC를 받아서 같은 지 검사 후 boolean 반환
 * @param {string} pw
 * @param {string} pwc
 * @returns {boolean}
 */
const checkSameValue = (pw, pwc) => {
  if (pw !== pwc) return false
  return true
}

const getInputData = () => {
  return { id: id.value, pw: pw.value, pwc: pwc.value, name: name.value }
}

const checkNullValue = (arr) => {
  for (const value of arr) {
    if (!value) return false
  }
  return true
}


const onClick = async () => {
  const { id, pw, pwc, name } = getInputData()
  if (!checkNullValue([id, pw, pwc, name])) return alert("NULL ERROR")
  if (!checkSameValue(pw, pwc)) return alert("NOT SAME ERROR")
  try {
    const { data } = await axios.post("http://210.90.136.10:3000/auth/", { id : id, pw : pw, name : name} )
    data ? (window.location.href = "./login.html") : alert("err")
  } 
  catch (error) {
      console.log(error)
  }
}

btn.addEventListener("click", onClick)
