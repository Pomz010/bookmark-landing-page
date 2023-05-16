export default class Contac {

    validateEmail(emailPattern, value, errorContainer, message) {
        if(!emailPattern.test(value)) {
            errorContainer.classList.add('form-error-style');
            message.classList.remove('invisible');
        } else {
            errorContainer.classList.remove('form-error-style');
            message.classList.add('invisible');
        }
    }

}
