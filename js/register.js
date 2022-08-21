const id = document.querySelector('#inputId')
const pw = document.querySelector('#inputPw')
const pwc = document.querySelector('#inputPwCheck')
const name = document.querySelector('#inputName')
const btn = document.querySelector(".joinBtn")

const checkSameValue =  (pw, pwc) => {
    if (pw !== pwc) return false
    return true
}

const getInputData = () => {
     return {id : id.value , pw : pw.value ,pwc: pwc.value, name: name.value}
}

const checkNullValue = (arr) => {
    for (const value of arr) {
        if(!value) return false
    }
    return true
}
console.log(name)
// console.log(btn)
console.log(typeof(name))

btn.addEventListener("click", async () => {  
    const {id, pw ,pwc ,name} =  getInputData()
    if(!checkNullValue([id, pw, pwc, name])) return alert("NULL ERROR")
    if (!checkSameValue(pw, pwc)) return alert('NOT SAME ERROR')
    return window.location.replace ('./login.html')
    // try {
    //     const config = {
    //         method : "post",
    //         url : "http://210.90.136.10:3000/auth",
    //         data: {id, pw ,name},
    //     }
    //     const { result } = await ( await axios(config)).data
    //     if(!result) return alert("ERROR")
        // return window.location.replace ('./login.html')
    // } catch (err) {
    //     console.log(err)
    // }
})