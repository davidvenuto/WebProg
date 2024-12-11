import { fetchData } from './utils.js';
class User {
    constructor(fullName, username, email, password) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const form = document.getElementById('register-form');

form.addEventListener('submit', register);

function register(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const fullName = `${firstName} ${lastName}`;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = new User(fullName, username, email, password);

    fetchData('/register', newUser, 'POST')
        .then(response => console.log('Registration successful:', response))
        .catch(error => console.error('Registration failed:', error));
}

