document.getElementById('form-btn')

.addEventListener('submit', () => {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let message = document.getElementById('userMessage').value;

    const userInput = { name, email, message };
    sessionStorage.setItem(`${name}'s Message`, JSON.stringify(userInput));
    alert(`Hello ${name}, Your message has been sent, we will get back to you shortly. Thank you`)
});


