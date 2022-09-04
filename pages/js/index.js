const signUp = document.querySelector('#clickSignUpBox')
const signIn = document.querySelector('#clickSignInBox')

const clickSignUp = () => {
    
    return window.location.replace('../pages/Regiseter.html')

}

const clickSignIn = () => {
    
    return window.location.replace('../pages/login.html')

}

signUp.addEventListener("click",clickSignUp)
signIn.addEventListener("click",clickSignIn)