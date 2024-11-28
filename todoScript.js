// Define the ToDoItem class
class ToDoItem {
    constructor(title) {
        this.title = title;
    }
}

// Get the form element by its ID
const todoForm = document.getElementById('todo-form');

// Add an event listener to handle form submission
todoForm.addEventListener('submit', handleTodoSubmit);

// Define the handleTodoSubmit function
function handleTodoSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Read input values from the form
    const title = document.getElementById('todo-item').value;

    // Create a new ToDoItem object with the input value
    const newToDoItem = new ToDoItem(title);

    // Print the ToDoItem object to the console
    console.log(newToDoItem);
}
