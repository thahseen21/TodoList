var todoList = [];

let keyRef = 0;

function AddTodo() {
    const value = document.getElementById("add-todo").value;


    if (value) {
        let temp = { value: value, isRead: false, isRemoved: false }
        todoList.push(temp)
        AddElementToHTML();
        document.getElementById("add-todo").value = null;
        updateLocalStorage();
        ToggleNoTodo()
    } else {
        alert('Please enter a todo');
    }
}

function AddElementToHTML(todo = null) {
    const p = document.createElement("p"); // creating a html element as <p> tag
    p.id = `todo-name-${keyRef}`

    const container = document.createElement("div"); // creating a html element as <p> tag
    container.className = `todo` // setting the <p> with a classname as 'todo'
    container.id = `${keyRef}`

    const removeBtn = document.createElement("button");
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => RemoveTodo(container.id))

    const node = document.createTextNode(todo?.value ?? todoList[todoList.length - 1].value); // creating a text

    p.appendChild(node); // adding the text to the <p>
    container.appendChild(p);
    container.appendChild(removeBtn); // adding the text to the <p>

    container.addEventListener('dblclick', () => MarkReadToggler(container.id));

    const element = document.getElementById("list-container"); // getting where to insert the <p> tag
    element.append(container);// appending p tag as child to the "list-container" id.
    keyRef++;
}

function RemoveTodo(id) {
    let tag = document.getElementById(id);
    var todo = todoList.filter(todo => todo.value === tag.getElementsByTagName('p')[0].innerText)
    if (todo[0].isRead) {

        todoList = todoList.filter(todo => todo.value !== tag.getElementsByTagName('p')[0].innerText)
        tag.style.display = 'none';

        tag.remove();
        updateLocalStorage();
        ToggleNoTodo();
    } else {
        alert("Please finish the task to remove...")
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

function MarkReadToggler(id) {
    let tag = document.getElementById(id);
    let todo = todoList.filter(todo => todo.value === tag.getElementsByTagName('p')[0].innerText)
    todo[0].isRead = !todo[0].isRead;
    if (todo[0].isRead) {
        document.getElementById(`todo-name-${id}`).style.textDecoration = 'line-through'
    } else {
        document.getElementById(`todo-name-${id}`).style.textDecoration = 'none'
    }
}

function GetListFromLocalStorage() {
    const data = localStorage.getItem('todoList');
    if (data) {
        todoList = JSON.parse(data);
        for (let todo of todoList) {
            AddElementToHTML(todo);
        }
        ToggleNoTodo();
    } else {
        console.log('no data found')
    }
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}