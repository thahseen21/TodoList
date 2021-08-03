var todoList = [];

function AddTodo() {
    const value = document.getElementById("add-todo").value;


    if (value) {
        let allRemoved = true;
        for (let todo of todoList) {
            if (!todo.isRemoved) {
                allRemoved = false
            }
        }
        if (todoList.length === 0 || allRemoved) {
            ToggleNoTodo()
        }
        let temp = { value: value, isRead: false, isRemoved: false }
        todoList.push(temp)
        Display();
        document.getElementById("add-todo").value = null;
    } else {
        alert('Please enter a todo');
    }
}

function Display() {
    const p = document.createElement("p"); // creating a html element as <p> tag
    p.id = `todo-name-${todoList.length - 1}`

    const container = document.createElement("div"); // creating a html element as <p> tag
    container.className = `todo` // setting the <p> with a classname as 'todo'
    container.id = `${todoList.length - 1}`

    const removeBtn = document.createElement("button");
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => RemoveTodo(container.id))

    const node = document.createTextNode(todoList[todoList.length - 1].value); // creating a text

    p.appendChild(node); // adding the text to the <p>
    container.appendChild(p);
    container.appendChild(removeBtn); // adding the text to the <p>

    container.addEventListener('dblclick', () => MarkReadToggler(container.id));

    const element = document.getElementById("list-container"); // getting where to insert the <p> tag
    element.append(container);// appending p tag as child to the "list-container" id.
}

function RemoveTodo(id) {
    let allRemoved = true;
    if (todoList[id].isRead) {
        let tag = document.getElementById(id);
        todoList[id].isRemoved = true
        tag.style.display = 'none';

        for (let todo of todoList) {
            if (!todo.isRemoved) {
                allRemoved = false
            }
        }
        if (allRemoved) {
            ToggleNoTodo();
        }
    } else {
        alert("Please finish the task to remove...")
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
    const todo = document.getElementById(id)
    if (todoList[id].isRead) {
        document.getElementById(`todo-name-${id}`).style.textDecoration = 'line-through'
    } else {
        document.getElementById(`todo-name-${id}`).style.textDecoration = 'none'
    }
}