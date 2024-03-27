const nameInput = document.getElementById('input__name')
const phoneInput = document.getElementById('input__phone')
const emailInput = document.getElementById('input__email')
const messageName = document.getElementById('error__name')
const messagePhone = document.getElementById('error__phone')
const messageEmail = document.getElementById('error__email')
const FormButton = document.getElementById('form__button')
const checkbox = document.getElementById('real-checkbox')


function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}


function validateNumber(number) {
    const regex = /^\d{12}$/;
    return regex.test(number);
}

function validateForm() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const isChecked = checkbox.checked;

    const isNameValid = name !== '';
    const isPhoneValid = validateNumber(parseInt(phone)) && phone !== '';
    const isEmailValid = validateEmail(email) && email !== '';

    const isFormValid = isNameValid && isPhoneValid && isEmailValid && isChecked;

    if(isFormValid){
        FormButton.disabled = !isFormValid;
        FormButton.classList.add('ready')
    } else{
        FormButton.disabled = !isFormValid;
        FormButton.classList.remove('ready')
    }
}

nameInput.addEventListener('input', () => {

    validateForm()

    if (nameInput.value === '') {
        nameInput.classList.add('error')
        messageName.textContent = 'Поле необходимо заполнить'
        return
    } else {
        nameInput.classList.remove('error')
        messageName.textContent = ''
    }
})

phoneInput.addEventListener('input', () => {
    validateForm()

    if (phoneInput.value === '') {
        phoneInput.classList.add('error')
        messagePhone.textContent = 'Поле необходимо заполнить'
        return
    } else {
        phoneInput.classList.remove('error')
        messagePhone.textContent = ''
    }

    if (!validateNumber(parseInt(phoneInput.value))) {
        phoneInput.classList.add('error')
        messagePhone.textContent = 'Некорректный формат телефона'
        return
    } else {
        phoneInput.classList.remove('error')
        messagePhone.textContent = ''
    }
})

emailInput.addEventListener('input', () => {

    validateForm()

    if (emailInput.value === '') {
        emailInput.classList.add('error')
        messageEmail.textContent = 'Поле необходимо заполнить'
        return
    } else {
        emailInput.classList.remove('error')
        messageEmail.textContent = ''
    }

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error')
        messageEmail.textContent = 'Некорректный формат почты'
        return
    } else {
        emailInput.classList.remove('error')
        messageEmail.textContent = ''
    }
})

checkbox.addEventListener('change', validateForm)