var todoList = [];

function AddTodo() {
    const value = document.getElementById("add-todo").value;
    if (todoList.length === 0) {
        ToggleNoTodo()
    }
    if (value) {
        let temp = { value: value, isRead: false }
        todoList.push(temp)
        Display();
        document.getElementById("add-todo").value = null;
    }
}

function Display() {
    const p = document.createElement("p"); // creating a html element as <p> tag
    p.className = `todo` // setting the <p> with a classname as 'todo'
    p.id = `${todoList.length - 1}`

    const removeBtn = document.createElement("button");
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => RemoveTodo(p.id))

    const node = document.createTextNode(todoList[todoList.length - 1].value); // creating a text

    p.appendChild(node); // adding the text to the <p>
    p.appendChild(removeBtn); // adding the text to the <p>
    // p.addEventListener('click', RemoveTodo);
    p.addEventListener('dblclick', () => MarkReadToggler(p.id));

    const element = document.getElementById("list-container"); // getting where to insert the <p> tag
    element.append(p);// appending p tag as child to the "list-container" id.
}

function RemoveTodo(id) {
    if (todoList[id].isRead) {
        todoList.splice(id, 1)
        let tag = document.getElementById(id);
        tag.remove();
    } else {
        alert("Please finish the task to remove...")
    }
    if (todoList.length == 0) {
        ToggleNoTodo();
    }
}

function ToggleNoTodo() {
    const todo = document.getElementById("empty-todo")
    if (todo?.style?.display === 'none') {
        todo.style.display = 'block'
    } else {
        todo.style.display = 'none'
    }
}

function MarkReadToggler(id) {
    todoList[id].isRead = !todoList[id].isRead;
    if (todoList[id].isRead) {
        document.getElementById(id).style.textDecoration = 'line-through'
    } else {
        document.getElementById(id).style.textDecoration = 'none'
    }
}