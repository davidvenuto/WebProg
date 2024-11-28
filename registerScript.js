// Define the User class
class User {
    constructor(fullName, username, email, password) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// Get the form element by its ID
const form = document.getElementById('register-form');

// Add an event listener to handle form submission
form.addEventListener('submit', register);

// Define the register function
function register(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Read input values from the form
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const fullName = `${firstName} ${lastName}`;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new User object with the input values
    const newUser = new User(fullName, username, email, password);

    // Print the User object to the console
    console.log(newUser);
}
