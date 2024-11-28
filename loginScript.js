// Define the User class (or Login class)
class User {
    constructor(usernameOrEmail, password) {
        this.usernameOrEmail = usernameOrEmail;
        this.password = password;
    }
}

// Get the form element by its ID
const loginForm = document.getElementById('login-form');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', handleLogin);

// Define the handleLogin function
function handleLogin(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Read input values from the form
    const usernameOrEmail = document.getElementById('username-email').value;
    const password = document.getElementById('password').value;

    // Create a new User object with the input values
    const loginUser = new User(usernameOrEmail, password);

    // Print the User object to the console
    console.log(loginUser);
}
