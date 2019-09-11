document.getElementById('password').addEventListener("input", (event) => {
    let messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    // let firstName = document.getElementById('firstname').value;
    // let lastName = document.getElementById('lastname').value;
    let password = event.target.value;
    // if (firstName.length > 0 && password.toUpperCase().includes(firstName.toUpperCase())) {
    //     let msgFirstName = document.createElement("p");
    //     let nodeFirstName = document.createTextNode("❌Please do not include your first name in your password");
    //     msgFirstName.appendChild(nodeFirstName);
    //     messagesContainer.appendChild(msgFirstName);
    // }
    // if (lastName.length > 0 && password.toUpperCase().includes(lastName.toUpperCase())) {
    //     let msgLastName = document.createElement("p");
    //     let nodeLastName = document.createTextNode("❌Please do not include your last name in your password");
    //     msgLastName.appendChild(nodeLastName);
    //     messagesContainer.appendChild(msgLastName);
    // }

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
        msg1.appendChild(node1);
        messagesContainer.appendChild(msg1);
    }
    if (regex2.test(password)) {
        let msg2 = document.createElement("p");
        let node2 = document.createTextNode("✅ At least one upper case letter");
        msg2.appendChild(node2);
        messagesContainer.appendChild(msg2);
    }
    if (regex3.test(password)) {
        let msg3 = document.createElement("p");
        let node3 = document.createTextNode("✅ At least one lower case letter");
        msg3.appendChild(node3);
        messagesContainer.appendChild(msg3);
    }
    if (regex4.test(password)) {
        let msg4 = document.createElement("p");
        let node4 = document.createTextNode("✅ At least one number");
        msg4.appendChild(node4);
        messagesContainer.appendChild(msg4);
    }
});

document.getElementById('test-button').addEventListener("click", (event) => {
    event.preventDefault();
    let messagesContainer = document.getElementById('messages');
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    if (firstName.length > 0 && password.toUpperCase().includes(firstName.toUpperCase())) {
        let msgFirstName = document.createElement("p");
        let nodeFirstName = document.createTextNode("❌ Please do not include your first name in your password");
        msgFirstName.appendChild(nodeFirstName);
        messagesContainer.insertBefore(msgFirstName, messagesContainer.childNodes[0]);
    }
    if (lastName.length > 0 && password.toUpperCase().includes(lastName.toUpperCase())) {
        let msgLastName = document.createElement("p");
        let nodeLastName = document.createTextNode("❌ Please do not include your last name in your password");
        msgLastName.appendChild(nodeLastName);
        messagesContainer.insertBefore(msgLastName, messagesContainer.childNodes[0]);
    }
});