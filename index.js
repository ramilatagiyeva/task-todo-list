let todoList = [
    'İlk todo',
    'İkinci todo',
    'ucuncu todo'
];

function renderTodo() {
    const listContainer = document.getElementById('todoList');
    listContainer.innerHTML = '';

    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        if (todo.done) todoItem.classList.add('done');

        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <div class="button-group">
                <button class="btn-green" onclick="toggleDone(${index})">✔</button>
                <button class="btn-yellow" onclick="editTodo(${index})">✏</button>
                <button class="btn-red" onclick="deleteTodo(${index})">❌</button>
            </div>
        `;
        listContainer.appendChild(todoItem);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput1');
    const newTodoText = input.value.trim();

    if (newTodoText !== '') {
        todoList.push({ text: newTodoText, done: false });
        input.value = ''; 
        renderTodoList();
    } else {
        alert('Todo metnini daxil edin');
    }
}

function toggleToKill(index) {
    todoList[index].done = !todoList[index].done;
    renderTodo();
}

function editTodo(index) {
    const newTodoText = prompt('Yeni todo metnini daxil edin:', todoList[index].text);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        todoList[index].text = newTodoText.trim();
        renderTodo();
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodo();
}
renderTodo();
