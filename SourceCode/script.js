let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')
let usernameInput = document.querySelector(".username")
let passwordInput = document.querySelector(".password")


function usernameValidation() {
    if (usernameInput.value.length < 12) {
        usernameMessage.style.color = "red"
        usernameMessage.innerHTML = "حداقل کاراکتر باید 12 تا باشد"
        usernameMessage.style.display = "block"
    } else {
        usernameMessage.style.color = "green"
        usernameMessage.innerHTML = "نام کاربری صحیح است"
    }
}


function passwordValidation() {
    if (passwordInput.value.length < 8) {
        passwordMessage.style.color = "red"
        passwordMessage.innerHTML = "حداقل تعداد کاراکتر باید 8 تا باشد"
        passwordMessage.style.display = "block"
    } else {
        passwordMessage.style.color = "green"
        passwordMessage.innerHTML = "پسورد صحیح است"
    }
}