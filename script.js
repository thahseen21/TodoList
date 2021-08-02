var todoList = ['wash clothes', 'sweeping']


function ClickHandler() {

    for (var todo of todoList) {
        const p = document.createElement("p"); // creating a html element as <p> tag
        p.className = 'todo' // setting the <p> with a classname as 'todo'

        const node = document.createTextNode(todo); // creating a text

        p.appendChild(node); // adding the text to the <p>

        const element = document.getElementById("list-container"); // getting where to insert the <p> tag
        element.appendChild(p);// appending p tag as child to the "list-container" id.
    }
}