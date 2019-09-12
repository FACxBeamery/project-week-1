document.getElementById('firstname').addEventListener("input", (event) => { 
    resetFormField(event.target);
    document.getElementById('test-button').disabled = false;
    document.getElementById('test-button').classList.remove('form__button--disabled');
});

document.getElementById('lastname').addEventListener("input", (event) => { 
    resetFormField(event.target);
    document.getElementById('test-button').disabled = false;
    document.getElementById('test-button').classList.remove('form__button--disabled');
});

document.getElementById('password').addEventListener("input", (event) => {
    resetFormField(event.target);
  
    let messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    document.getElementById('test-button').disabled = false;
    document.getElementById('test-button').classList.remove('form__button--disabled');
    let password = event.target.value;

    // At least 6 alphanumerical characters long
    let regex1 = /^[A-Za-z0-9]{6,}$/;
    // at least one upper case letter
    let regex2 = /[A-Z]+/;
    // at least one lower case letter
    let regex3 = /[a-z]+/;  
    // at least one number
    let regex4 = /[0-9]+/;
    
    if (regex1.test(password)) {
        let msg1 = document.createElement("p");
        let node1 = document.createTextNode("✅ At least 6 alphanumerical characters long");
        msg1.classList.add('regex');
        msg1.appendChild(node1);
        messagesContainer.appendChild(msg1);
    }
    if (regex2.test(password)) {
        let msg2 = document.createElement("p");
        let node2 = document.createTextNode("✅ At least one upper case letter");
        msg2.classList.add('regex');
        msg2.appendChild(node2);
        messagesContainer.appendChild(msg2);
    }
    if (regex3.test(password)) {
        let msg3 = document.createElement("p");
        let node3 = document.createTextNode("✅ At least one lower case letter");
        msg3.classList.add('regex');
        msg3.appendChild(node3);
        messagesContainer.appendChild(msg3);
    }
    if (regex4.test(password)) {
        let msg4 = document.createElement("p");
        let node4 = document.createTextNode("✅ At least one number");
        msg4.classList.add('regex');
        msg4.appendChild(node4);
        messagesContainer.appendChild(msg4);
    }
});

document.getElementById('test-button').addEventListener("click", (event) => {
    event.preventDefault();
    event.target.disabled = 'disabled';
    event.target.classList.add('form__button--disabled');

    if (document.getElementsByTagName('button').length > 1) {
        document.getElementById('form').removeChild(document.getElementsByTagName('button')[1]);
    }

    let button = document.createElement("button");
    button.classList.add('form__button')
    button.style.color = "#d46d1e";
    button.innerHTML = "RESET FORM";
    let form = document.getElementById("form");
    let buttonsContainer = document.getElementById('form__buttons-wrapper');
    buttonsContainer.appendChild(button);
    button.addEventListener("click", (event) => {
        var elements = form.getElementsByTagName('p');
        while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
        var inputs = form.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('form__input--red')
        }
        document.getElementById('test-button').disabled = false;
        document.getElementById('test-button').classList.remove('form__button--disabled');
    });

    let messagesContainer = document.getElementById('messages');
    let firstNameElem = document.getElementById('firstname');
    let firstName = firstNameElem.value;
    let lastNameElem = document.getElementById('lastname');
    let lastName = lastNameElem.value;
    let passwordElem =  document.getElementById('password');
    let password = passwordElem.value;
    if (firstName.length === 0) {
        let requiredMsg1 = document.createElement("p");
        let nodeMsg1 = document.createTextNode("This Field is Required.");
        requiredMsg1.appendChild(nodeMsg1);
        firstNameElem.classList.add('form__input--red');
        requiredMsg1.classList.add('form__warning');
        firstNameElem.after(requiredMsg1);
    }
    if (lastName.length === 0) {
        let requiredMsg2 = document.createElement("p");
        let nodeMsg2 = document.createTextNode("This Field is Required.");
        requiredMsg2.appendChild(nodeMsg2);
        lastNameElem.classList.add('form__input--red');
        requiredMsg2.classList.add('form__warning');
        lastNameElem.after(requiredMsg2);
    }
    if (password.length === 0) {
        let requiredMsg3 = document.createElement("p");
        let nodeMsg3 = document.createTextNode("This Field is Required.");
        requiredMsg3.appendChild(nodeMsg3);
        passwordElem.classList.add('form__input--red');
        requiredMsg3.classList.add('form__warning');
        passwordElem.after(requiredMsg3);
    }
    if (firstName.length > 0 && password.toUpperCase().includes(firstName.toUpperCase())) {
        let msgFirstName = document.createElement("p");
        let nodeFirstName = document.createTextNode("❌ Please do not include your first name in your password");
        msgFirstName.appendChild(nodeFirstName);
        msgFirstName.classList.add('password-warning');
        messagesContainer.insertBefore(msgFirstName, messagesContainer.childNodes[0]);
    }
    if (lastName.length > 0 && password.toUpperCase().includes(lastName.toUpperCase())) {
        let msgLastName = document.createElement("p");
        let nodeLastName = document.createTextNode("❌ Please do not include your last name in your password");
        msgLastName.appendChild(nodeLastName);
        msgLastName.classList.add('password-warning');
        messagesContainer.insertBefore(msgLastName, messagesContainer.childNodes[0]);
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
    } else  {
        let passwordStrength = document.createElement("p");
        let nodePassword = document.createTextNode(score);
        passwordStrength.appendChild(nodePassword);
        passwordStrength.classList.add('password-strength')
        messagesContainer.insertBefore(passwordStrength, messagesContainer.childNodes[0]);
    }
});

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