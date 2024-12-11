import { fetchData } from './utils.js';

class ToDoItem {
    constructor(title) {
        this.title = title;
    }
}

const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit', handleTodoSubmit);

function handleTodoSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('todo-item').value;

    const newToDoItem = { title }; // Adjusted object structure for direct use
    console.log("To-Do item being sent:", newToDoItem); // Debugging

    fetchData('/todos/add', newToDoItem, 'POST')
        .then(response => console.log('To-Do item added successfully:', response))
        .catch(error => console.error('Adding To-Do item failed:', error));
}

