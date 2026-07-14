function createTodo() {
    const noteInput = document.getElementById('note');
    const todosContainer = document.getElementById('todos-container');
    const noteValue = noteInput.value.trim();

    if (!noteValue) {
        return;
    }

    const todo = document.createElement('li');
    todo.textContent = noteValue;
    todo.addEventListener('click', function (event) {
        todoCheck(event, todo);
    });

    todosContainer.appendChild(todo);
    noteInput.value = '';
}

function deleteTodos() {
    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = '';
}

function todoCheck(e, todo) {
    if (todo.style.textDecoration === 'line-through') {
        todo.style.textDecoration = 'none';
        return;
    }

    todo.style.textDecoration = 'line-through';
}