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

    const newToDoItem = new ToDoItem(title);

    console.log(newToDoItem);
}
