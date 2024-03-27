const body = document.body;

const HTMLButton = `
<button class="button__fixed">
    <span>У меня есть вопросы про учёбу</span>
    <span id="arrow" class="prisma-button2__icon"><svg class="icon icon-arrows-24-chevronup" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 14.7071C20.0976 14.3166 20.0976 13.6834 19.7071 13.2929L12 5.58582L4.29289 13.2929C3.90237 13.6834 3.90237 14.3166 4.29289 14.7071C4.68342 15.0977 5.31658 15.0977 5.70711 14.7071L12 8.41424L18.2929 14.7071C18.6834 15.0977 19.3166 15.0977 19.7071 14.7071Z" fill="currentColor" fill-opacity="0.85"></path></svg></span>
</button>
`;

const HTMLModel = `
<div class="model__block">
<div class="model__title">
    <h2>Давайте поможем</h2>
    <div class="model__close" id="model-close">
        <svg class="icon help-callback__close-button" viewBox="0 0 24 24" width="24" height="24" fill="none" name="symbols-24-cross"><path d="M6.64046 5.22624C6.24993 4.83572 5.61677 4.83572 5.22624 5.22624C4.83572 5.61677 4.83572 6.24993 5.22624 6.64046L10.5858 12L5.22624 17.3596C4.83572 17.7501 4.83572 18.3833 5.22624 18.7738C5.61677 19.1643 6.24993 19.1643 6.64046 18.7738L12 13.4142L17.3596 18.7738C17.7501 19.1643 18.3833 19.1643 18.7738 18.7738C19.1643 18.3833 19.1643 17.7501 18.7738 17.3596L13.4142 12L18.7738 6.64046C19.1643 6.24993 19.1643 5.61677 18.7738 5.22624C18.3833 4.83572 17.7501 4.83572 17.3596 5.22624L12 10.5858L6.64046 5.22624Z" fill="currentColor" fill-opacity="0.85"></path></svg>
    </div>
</div>
<p class="model__sub-title">Напишите, как вас зовут и по какому номеру можно связываться — позвоним и расскажем всё про курсы</p>
<form action="" class="model">
    <div class="model__inputBox">
        <input id="model-input__name" type="text" required>
        <label>Имя *</label>
        <svg class="correct icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-checkcirclefilled"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.716 7.1981C12.1016 6.80266 12.0935 6.16955 11.6981 5.784C11.3027 5.39845 10.6695 5.40646 10.284 5.8019L7.12158 9.04541L5.73639 7.53773C5.36274 7.13103 4.73014 7.10424 4.32344 7.4779C3.91675 7.85155 3.88996 8.48415 4.26361 8.89084L6.36361 11.1766C6.5495 11.3789 6.81044 11.4958 7.08517 11.4999C7.35989 11.504 7.62419 11.3948 7.816 11.1981L11.716 7.1981Z" fill="#1c9c75" fill-opacity="0.85"></path></svg>
        <svg class="error-icon icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-exclamationcirclefilled"><g clip-path="url(#clip0_2104_8935)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.0026C12.4183 16.0026 16 12.4209 16 8.00269C16 3.58441 12.4183 0.00268555 8 0.00268555C3.58172 0.00268555 0 3.58441 0 8.00269C0 12.4209 3.58172 16.0026 8 16.0026ZM6.70996 11.7052C6.70996 10.9595 7.27667 10.4226 7.9925 10.4226C8.72326 10.4226 9.28996 10.9595 9.28996 11.7052C9.28996 12.4509 8.72326 13.0026 7.9925 13.0026C7.27667 13.0026 6.70996 12.4509 6.70996 11.7052ZM7.46502 3.00269H8.53489C8.97368 3.00269 9.31875 3.37771 9.2823 3.81498L8.88821 8.54371C8.86661 8.80285 8.64998 9.00218 8.38994 9.00218H7.61006C7.35002 9.00218 7.13338 8.80286 7.11178 8.54372L6.71761 3.81499C6.68116 3.37772 7.02623 3.00269 7.46502 3.00269Z" fill="#e36563" fill-opacity="0.85"></path></g><defs><clipPath id="clip0_2104_8935"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
        <div id="model-error__name" class="model__message"></div>
    </div>
    <div class="model__inputBox">
        <input id="model-input__phone" type="text" required>
        <label>Контактный телефон *</label>
        <svg class="correct icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-checkcirclefilled"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.716 7.1981C12.1016 6.80266 12.0935 6.16955 11.6981 5.784C11.3027 5.39845 10.6695 5.40646 10.284 5.8019L7.12158 9.04541L5.73639 7.53773C5.36274 7.13103 4.73014 7.10424 4.32344 7.4779C3.91675 7.85155 3.88996 8.48415 4.26361 8.89084L6.36361 11.1766C6.5495 11.3789 6.81044 11.4958 7.08517 11.4999C7.35989 11.504 7.62419 11.3948 7.816 11.1981L11.716 7.1981Z" fill="#1c9c75" fill-opacity="0.85"></path></svg>
        <svg class="error-icon icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-exclamationcirclefilled"><g clip-path="url(#clip0_2104_8935)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.0026C12.4183 16.0026 16 12.4209 16 8.00269C16 3.58441 12.4183 0.00268555 8 0.00268555C3.58172 0.00268555 0 3.58441 0 8.00269C0 12.4209 3.58172 16.0026 8 16.0026ZM6.70996 11.7052C6.70996 10.9595 7.27667 10.4226 7.9925 10.4226C8.72326 10.4226 9.28996 10.9595 9.28996 11.7052C9.28996 12.4509 8.72326 13.0026 7.9925 13.0026C7.27667 13.0026 6.70996 12.4509 6.70996 11.7052ZM7.46502 3.00269H8.53489C8.97368 3.00269 9.31875 3.37771 9.2823 3.81498L8.88821 8.54371C8.86661 8.80285 8.64998 9.00218 8.38994 9.00218H7.61006C7.35002 9.00218 7.13338 8.80286 7.11178 8.54372L6.71761 3.81499C6.68116 3.37772 7.02623 3.00269 7.46502 3.00269Z" fill="#e36563" fill-opacity="0.85"></path></g><defs><clipPath id="clip0_2104_8935"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
        <div id="model-error__phone" class="model__message"></div>
    </div>
    <div class="model__inputBox">
        <input id="model-input__email" type="text" required>
        <label>Почта *</label>
        <svg class="correct icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-checkcirclefilled"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.716 7.1981C12.1016 6.80266 12.0935 6.16955 11.6981 5.784C11.3027 5.39845 10.6695 5.40646 10.284 5.8019L7.12158 9.04541L5.73639 7.53773C5.36274 7.13103 4.73014 7.10424 4.32344 7.4779C3.91675 7.85155 3.88996 8.48415 4.26361 8.89084L6.36361 11.1766C6.5495 11.3789 6.81044 11.4958 7.08517 11.4999C7.35989 11.504 7.62419 11.3948 7.816 11.1981L11.716 7.1981Z" fill="#1c9c75" fill-opacity="0.85"></path></svg>
        <svg class="error-icon icon prisma-input__icon" viewBox="0 0 16 16" width="16" height="16" fill="none" name="symbols-16-exclamationcirclefilled"><g clip-path="url(#clip0_2104_8935)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.0026C12.4183 16.0026 16 12.4209 16 8.00269C16 3.58441 12.4183 0.00268555 8 0.00268555C3.58172 0.00268555 0 3.58441 0 8.00269C0 12.4209 3.58172 16.0026 8 16.0026ZM6.70996 11.7052C6.70996 10.9595 7.27667 10.4226 7.9925 10.4226C8.72326 10.4226 9.28996 10.9595 9.28996 11.7052C9.28996 12.4509 8.72326 13.0026 7.9925 13.0026C7.27667 13.0026 6.70996 12.4509 6.70996 11.7052ZM7.46502 3.00269H8.53489C8.97368 3.00269 9.31875 3.37771 9.2823 3.81498L8.88821 8.54371C8.86661 8.80285 8.64998 9.00218 8.38994 9.00218H7.61006C7.35002 9.00218 7.13338 8.80286 7.11178 8.54372L6.71761 3.81499C6.68116 3.37772 7.02623 3.00269 7.46502 3.00269Z" fill="#e36563" fill-opacity="0.85"></path></g><defs><clipPath id="clip0_2104_8935"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
        <div id="model-error__email" class="model__message"></div>
    </div>
    <label class="model__inputCheckBox">
        <input type="checkbox" class="model__real-checkbox" name="" id="model-real-checkbox" required>
        <span class="model__custom-checkbox"></span>
        <span>Соглашаюсь с условиями<a style="margin-left: 5px;" href="https://yandex.ru/legal/confidential/">обработки персональных данных</a></span>
    </label>
    <button id="model__button" class="model__button" type="button" disabled>Жду звонка</button>
</form>
<div class="model__text">
    <p>Или позвоните нам сами: 8 800 700-93-29</p>
    <p>А если не любите голосом — напишите:</p>
</div>
<div class="model__social">
    <a href="https://t.me/YndxPracticumCallbackBot" class="social__block">
        <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" name="services-24-telegram"><path d="M9.55825 14.3029L15.9202 19.0033C16.6462 19.4038 17.1702 19.1964 17.351 18.3292L19.9407 6.12583C20.2058 5.06284 19.5355 4.58072 18.841 4.89603L3.63455 10.7596C2.59657 11.1759 2.60262 11.755 3.44535 12.013L7.34766 13.231L16.3819 7.53138C16.8084 7.27275 17.1998 7.4118 16.8786 7.69693" fill="currentColor" fill-opacity="0.85"></path></svg>
    </a>
    <a href="https://vk.com/yandex.practicum" class="social__block">
        <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" name="services-24-vk"><path d="M12.7978 16.99C6.65169 16.99 3.14607 13.2438 3 7H6.07865C6.17977 11.5754 8.44944 13.4935 10.2472 13.9131V7.00999H13.1461V10.956C14.9213 10.7862 16.7865 8.98801 17.4157 7.00999H20.3146C20.0817 8.03859 19.6121 9.01327 18.9353 9.87285C18.2586 10.7324 17.3893 11.4583 16.382 12.005C17.505 12.5002 18.4972 13.2014 19.2932 14.0624C20.0892 14.9234 20.6709 15.9246 21 17H17.7978C17.504 16.0641 16.9057 15.2263 16.0781 14.5918C15.2505 13.9573 14.2304 13.5543 13.1461 13.4336V17L12.7978 16.99Z" fill="currentColor" fill-opacity="0.85"></path></svg>
    </a>
    <a href="https://api.whatsapp.com/send/?phone=525584211614&text&type=phone_number&app_absent=0" class="social__block">
        <svg class="icon icon-social-whatsapp" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.205 7.08c-.194-.465-.34-.482-.634-.494a5.669 5.669 0 00-.335-.012c-.383 0-.782.112-1.023.359-.294.3-1.023.999-1.023 2.433 0 1.435 1.046 2.822 1.187 3.017.147.193 2.04 3.18 4.978 4.397 2.298.952 2.98.864 3.503.752.764-.164 1.722-.729 1.963-1.41.241-.682.241-1.264.17-1.388-.07-.123-.264-.194-.558-.34-.293-.148-1.722-.853-1.992-.947-.264-.1-.517-.065-.717.217-.282.394-.558.794-.781 1.035-.177.188-.465.212-.706.112-.323-.135-1.228-.453-2.345-1.447-.864-.77-1.452-1.728-1.622-2.016-.17-.294-.018-.464.118-.623.147-.182.288-.312.434-.482.148-.17.23-.259.324-.459.1-.194.03-.394-.041-.54-.07-.148-.659-1.583-.9-2.164zM11.997 2C6.484 2 2 6.485 2 12c0 2.187.705 4.215 1.904 5.861l-1.246 3.716 3.844-1.229A9.921 9.921 0 0012.003 22C17.516 22 22 17.514 22 12S17.516 2 12.003 2h-.006z" fill="currentColor"></path></svg>
    </a>
</div>
</div>
`;

let buttonAdded = false;
let modelAdded = false;

window.addEventListener("scroll", () => {
    const button = document.querySelector(".button__fixed");
    if (!buttonAdded && window.scrollY >= 300) {
        body.insertAdjacentHTML("beforeend", HTMLButton);
        buttonAdded = true;
        const newButton = document.querySelector(".button__fixed");
        newButton.addEventListener("click", () => {
            if (!modelAdded && window.innerWidth >= 540) {
                body.insertAdjacentHTML("beforeend", HTMLModel);
                modelAdded = true;
                newButton.classList.add('active')
                const nameInput = document.getElementById("model-input__name");
                const phoneInput =
                    document.getElementById("model-input__phone");
                const emailInput =
                    document.getElementById("model-input__email");
                const messageName =
                    document.getElementById("model-error__name");
                const messagePhone =
                    document.getElementById("model-error__phone");
                const messageEmail =
                    document.getElementById("model-error__email");
                const FormButton = document.getElementById("model__button");
                const checkbox = document.getElementById("model-real-checkbox");
                const close = document.getElementById('model-close')

                function validateEmail(email) {
                    const regex =
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                
                    const isNameValid = name !== "";
                    const isPhoneValid =
                        validateNumber(parseInt(phone)) && phone !== "";
                    const isEmailValid = validateEmail(email) && email !== "";
                
                    const isFormValid =
                        isNameValid &&
                        isPhoneValid &&
                        isEmailValid &&
                        isChecked;
                
                    nameInput.classList.toggle("correct-input", isNameValid);
                    phoneInput.classList.toggle("correct-input", isPhoneValid);
                    emailInput.classList.toggle("correct-input", isEmailValid);
                
                    if (isFormValid) {
                        FormButton.disabled = !isFormValid;
                        FormButton.classList.add("ready");
                    } else {
                        FormButton.disabled = !isFormValid;
                        FormButton.classList.remove("ready");
                    }
                }

                nameInput.addEventListener("input", () => {
                    validateForm();

                    if (nameInput.value === "") {
                        nameInput.classList.add("error");
                        messageName.textContent = "Поле необходимо заполнить";
                        return;
                    } else {
                        nameInput.classList.remove("error");
                        messageName.textContent = "";
                    }
                });

                phoneInput.addEventListener("input", () => {
                    validateForm();

                    if (phoneInput.value === "") {
                        phoneInput.classList.add("error");
                        messagePhone.textContent = "Поле необходимо заполнить";
                        return;
                    } else {
                        phoneInput.classList.remove("error");
                        messagePhone.textContent = "";
                    }

                    if (!validateNumber(parseInt(phoneInput.value))) {
                        phoneInput.classList.add("error");
                        messagePhone.textContent =
                            "Некорректный формат телефона";
                        return;
                    } else {
                        phoneInput.classList.remove("error");
                        messagePhone.textContent = "";
                    }
                });

                emailInput.addEventListener("input", () => {
                    validateForm();

                    if (emailInput.value === "") {
                        emailInput.classList.add("error");
                        messageEmail.textContent = "Поле необходимо заполнить";
                        return;
                    } else {
                        emailInput.classList.remove("error");
                        messageEmail.textContent = "";
                    }

                    if (!validateEmail(emailInput.value)) {
                        emailInput.classList.add("error");
                        messageEmail.textContent = "Некорректный формат почты";
                        return;
                    } else {
                        emailInput.classList.remove("error");
                        messageEmail.textContent = "";
                    }
                });

                checkbox.addEventListener("change", validateForm);

                close.addEventListener("click", () => {
                    const model = document.querySelector(".model__block");
                    newButton.classList.remove('active')
                    model.remove();
                    modelAdded = false;
                });
            } else {
                const model = document.querySelector(".model__block");
                model.remove();
                newButton.classList.remove('active')
                modelAdded = false;
            }
        });
        if(window.innerWidth <= 540){
            const arrow = document.getElementById('arrow');
            const form = document.querySelector('.content__form')
            arrow.style.display = 'none';
            newButton.addEventListener('click', () => {
                form.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    } else if (buttonAdded && window.scrollY < 300) {
        button.remove();
        buttonAdded = false;
        if (modelAdded) {
            const model = document.querySelector(".model__block");
            model.remove();
            modelAdded = false;
        }
    }
});
