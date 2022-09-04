const inputId=document.querySelector('#inputId')
const inputPw = document.querySelector('#inputPw')
const btn = document.querySelector('#loginBtn')
const h1 = document.querySelector('#logInButtonText')
    
const getInputData = ()=> {
    
    return {id : inputId.value, pw : inputPw.value}

}

const checkNullValue = (arr) => {
    
    for (const value of arr) {
        
        if(!value) return false
    
    }
    return true

}
  

btn.addEventListener  ('click',  () => {
    const {id, pw} = getInputData()
    if(!checkNullValue([id,pw])) return alert('null error')
    
    axios({
       
        method : "post",
        url : 'http://210.90.136.10:3000/auth/login',
        data : {id : id, pw : pw},

    })
    .then((res) => {
        
        if(!res.data) 
            alert('err')
        else 
            window.location.replace('./main.html')
        
      }
    )
    .catch((err) =>  
      
        console.log(err)
    
    )
  }
)