var todoList = [];

function AddTodo() {
    const value = document.getElementById("add-todo").value;
    if (value) {
        todoList.push(value)
        Display();
        document.getElementById("add-todo").value = null;
    }
    if (todoList.length > 0) {
        ToggleNoTodo()
    }
}

function Display() {
    const p = document.createElement("p"); // creating a html element as <p> tag
    p.className = `todo` // setting the <p> with a classname as 'todo'
    p.id = `${todoList.length - 1}`

    const node = document.createTextNode(todoList[todoList.length - 1]); // creating a text

    p.appendChild(node); // adding the text to the <p>
    p.addEventListener('click', RemoveTodo)

    const element = document.getElementById("list-container"); // getting where to insert the <p> tag
    element.append(p);// appending p tag as child to the "list-container" id.
}

function RemoveTodo(id) {
    let idName = id?.target?.id
    todoList.splice(idName, 1)
    let tag = document.getElementById(idName);
    tag.remove();
    ToggleNoTodo();
}

function ToggleNoTodo() {
    const todo = document.getElementById("empty-todo")
    if (todo?.style?.display === 'none') {
        todo.style.display = 'block'
    } else {
        todo.style.display = 'none'
    }
}