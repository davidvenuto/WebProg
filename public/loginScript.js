import { fetchData } from './utils.js';
class User {
    constructor(usernameOrEmail, password) {
        this.usernameOrEmail = usernameOrEmail;
        this.password = password;
    }
}

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById('username-email').value;
    const password = document.getElementById('password').value;

    const loginUser = new User(usernameOrEmail, password);

    fetchData('/login', loginUser, 'POST')
        .then(response => console.log('Login successful:', response))
        .catch(error => console.error('Login failed:', error));
}
