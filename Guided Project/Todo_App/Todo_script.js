function createTodo() {
    const userInput = document.getElementById('note').value;
    const listItem = document.createElement("li");
    listItem.innerHTML = userInput;
    listItem.setAttribute('onclick', 'todoCheck(event, this)');
    const todosContainerElement = document.getElementById('todos-container');
    todosContainerElement.appendChild(listItem);
    document.getElementById('note').value = '';
}

function deleteTodos() {
    const todosContainerElement = document.getElementById('todos-container');
    todosContainerElement.innerHTML = '';
}

function todoCheck(e, todo) {
    if (todo.style.textDecoration === '') {
        todo.style.textDecoration = 'line-through';
    } else {
        todo.style.textDecoration = '';
    }
}