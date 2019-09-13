document.addEventListener('input', function (event) {
    resetFormField(event.target);
    resetTestButton();
}, false);

document.getElementById('password').addEventListener("input", (event) => {
    resetFormField(event.target);
    resetTestButton();

    const messagesContainer = document.getElementById('messages');
    resetMessagesContainer(messagesContainer);
    
    const password = event.target.value;  

    // At least 6 alphanumerical and/or special characters long
    const regex1 = /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,}$/;
    // at least one upper case letter
    const regex2 = /[A-Z]+/;
    // at least one lower case letter
    const regex3 = /[a-z]+/;  
    // at least one number
    const regex4 = /[0-9]+/;
    
    if (regex1.test(password)) {
        addRegexDesc("✅ At least 6 alphanumerical and/or special characters long", messagesContainer);
    }
    if (regex2.test(password)) {
        addRegexDesc("✅ At least one upper case letter", messagesContainer);
    }
    if (regex3.test(password)) {
        addRegexDesc("✅ At least one lower case letter", messagesContainer);
    }
    if (regex4.test(password)) {
        addRegexDesc("✅ At least one number", messagesContainer);
    }
});

document.getElementById('test-button').addEventListener("click", (event) => {
    // prevent default submission of the form
    event.preventDefault();

    // once clicked, disable the test button
    event.target.disabled = 'disabled';
    event.target.classList.add('form__button--disabled');

    if (document.getElementsByTagName('button').length > 1) {
        document.getElementById('form__buttons-wrapper').removeChild(document.getElementsByTagName('button')[1]);
    }

    createResetFormButton();

    const messagesContainer = document.getElementById('messages');
    const firstNameElem = document.getElementById('firstname');
    const firstName = firstNameElem.value;
    const lastNameElem = document.getElementById('lastname');
    const lastName = lastNameElem.value;
    const passwordElem =  document.getElementById('password');
    const password = passwordElem.value;
    
    if (firstName.length === 0 && !firstNameElem.classList.contains('form__input--red')) {
        addFormWarning(firstNameElem); 
    }
    if (lastName.length === 0 && !lastNameElem.classList.contains('form__input--red')) {
        addFormWarning(lastNameElem);
    }
    if (password.length === 0 && !passwordElem.classList.contains('form__input--red')) {
        addFormWarning(passwordElem);
    }
    if (firstName.length > 0 && password.toUpperCase().includes(firstName.toUpperCase())) {
        addPasswordWarning("❌ Please do not include your first name in your password", messagesContainer);
    }
    if (lastName.length > 0 && password.toUpperCase().includes(lastName.toUpperCase())) {
        addPasswordWarning("❌ Please do not include your last name in your password", messagesContainer);
    }
   
    let score = '';

    switch (document.getElementsByClassName('regex').length) {
        case 0:
            if (password) {
                score = 'Password Strength: BADDDD 👺';
            }
            break;
        case 1:
            score = 'Password Strength: MEH 🤒';
            break;
        case 2:
            score = 'Password Strength: GOOD 🧐';
            break;
        case 3:
            score = 'Password Strength: YAY, you can do better, though. 💃 ';
            break;
        case 4:
            score = 'Password Strength: EXCELLENT 🙏';
            break;
        default:
            break;
    }

    if (messagesContainer.getElementsByClassName('password-strength').length > 0) {
        messagesContainer.getElementsByClassName('password-strength')[0].textContent = score;
    } else if (password.length > 0) {
        const passwordStrength = document.createElement("p");
        const nodePassword = document.createTextNode(score);
        passwordStrength.appendChild(nodePassword);
        passwordStrength.classList.add('password-strength')
        messagesContainer.insertBefore(passwordStrength, messagesContainer.childNodes[0]);
    }
});

/**
 * Removes form field warning below the input box and also the 'red' styling
 * @param {DOM Element} elem 
 */
const resetFormField = ((elem) => {
    if (elem.classList.contains('form__input--red')) {
        // remove next sibling 
        if(elem && elem.nextSibling) {
            elem.parentNode.removeChild(elem.nextSibling);
        }
        // remove class form__input--red
        elem.classList.remove('form__input--red');
    }
});

/**
 * Enables the Test button and removes the 'disabled' styling
 *  */
const resetTestButton = (() => {
    document.getElementById('test-button').disabled = false;
    document.getElementById('test-button').classList.remove('form__button--disabled');
});

/**
 * Clears the messages' container
 * @param {DOM Element} container 
 */
const resetMessagesContainer = ((container) => {
    container.innerHTML = '';
});

/**
 * Appends a button that resets the form to the form buttons' container
 */
const createResetFormButton = (() => {
    const button = document.createElement("button");
    button.classList.add('form__button')
    button.style.color = "#d46d1e";
    button.innerHTML = "RESET FORM";
    const form = document.getElementById("form");
    const buttonsContainer = document.getElementById('form__buttons-wrapper');
    buttonsContainer.appendChild(button);
    button.addEventListener("click", (event) => {
        // remove all child elements of form that are a P
        let elements = form.getElementsByTagName('p');
        while (elements[0]) elements[0].parentNode.removeChild(elements[0]);

        // iterate through all input elements and remove the form__input--red class
        let inputs = form.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('form__input--red')
        }
        resetTestButton();
    });
});

/**
 * Appends the p element containing the message 'this field is required' bellow the respect input field
 * @param {DOM Element} inputElem 
 */
const addFormWarning = ((inputElem) => {
    const requiredMsg1 = document.createElement("p");
    const nodeMsg1 = document.createTextNode("This Field is Required.");
    requiredMsg1.appendChild(nodeMsg1);
    inputElem.classList.add('form__input--red');
    requiredMsg1.classList.add('form__warning');
    inputElem.after(requiredMsg1);
});

/**
 * Appends the p element containing the password warning to the messages container
 * @param {String} message 
 * @param {DOM Element} container 
 */
const addPasswordWarning = ((message, container) => {
    const msgFirstName = document.createElement("p");
    const nodeFirstName = document.createTextNode(message);
    msgFirstName.appendChild(nodeFirstName);
    msgFirstName.classList.add('password-warning');
    container.insertBefore(msgFirstName, container.childNodes[0])
});

/**
 * Append Regex Rule matched message to messages container
 * @param {String} message 
 * @param {DOM Element} container 
 */
const addRegexDesc = ((message, container) => {
    const msg1 = document.createElement("p");
    const node1 = document.createTextNode(message);
    msg1.classList.add('regex');
    msg1.appendChild(node1);
    container.appendChild(msg1)
});