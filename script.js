var todoList = [];

let keyRef = 0;

function AddTodo() {

    const inputValue = document.getElementById("add-todo").value;
    if (inputValue) {
        let temp = { value: inputValue, isRead: false, key: keyRef }
        todoList.push(temp)
        AddElementToHTML(inputValue);
        document.getElementById("add-todo").value = null;
        updateLocalStorage();
        ToggleNoTodo()
    } else {
        alert('Please enter a todo');
    }
}

function AddElementToHTML(data, todo = null) {
    const todoWrapper = document.getElementById("list-container");

    const newTodo = `<div class="todo" id="todo-${keyRef}"}>
    <input type="checkbox" onclick="MarkReadToggler(${keyRef})" >
    <p id="todo-name-${keyRef}">${data}</p>
    <button onclick="RemoveTodo(${keyRef})">X</button>
    </div>`;

    todoWrapper.insertAdjacentHTML("beforeend", newTodo);
    keyRef++;
}

function RemoveTodo(key) {
    if (todoList.filter(todo => todo.key === key)[0].isRead) {
        //removing the html element
        const toBeRemovedTag = document.getElementById(`todo-${key}`);
        toBeRemovedTag.remove();

        //to remove the element from the list
        todoList = todoList.filter(todo => todo.key !== key)
        console.log(todoList)
        ToggleNoTodo();

        //to remove from the localStorage
        updateLocalStorage(); 
    } else {
        alert('Please complete the task to remove it')
    }
}

function ToggleNoTodo() {
    const todo = document.getElementById("empty-todo")
    if (todoList.length === 0) {
        todo.style.display = 'block'
    } else {
        todo.style.display = 'none'
    }
}

function MarkReadToggler(key) {
    todoList.filter(todo => { if (todo.key === key) { todo.isRead = !todo.isRead } })
}

function GetListFromLocalStorage() {
    const data = localStorage.getItem('todoList');
    if (data) {
        todoList = JSON.parse(data);
        for (let todo of todoList) {
            AddElementToHTML(todo.value);
        }
        ToggleNoTodo();
    } else {
        console.log('no data found')
    }
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}