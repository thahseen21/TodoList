var todoList = ['wash clothes', 'sweeping']

function AddTodo() {
    const value = document.getElementById("add-todo").value;
    if (value) {
        todoList.push(value)
        Display();
        document.getElementById("add-todo").value = null;
    }
}

function Display() {
    const p = document.createElement("p"); // creating a html element as <p> tag
    p.className = 'todo' // setting the <p> with a classname as 'todo'

    const node = document.createTextNode(todoList[todoList.length - 1]); // creating a text

    p.appendChild(node); // adding the text to the <p>

    const element = document.getElementById("list-container"); // getting where to insert the <p> tag
    element.append(p);// appending p tag as child to the "list-container" id.
}