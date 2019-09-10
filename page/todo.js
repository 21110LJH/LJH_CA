const TodoForm = document.querySelector(".jsTodoForm");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.querySelector(".jsTodoList");
const todosLS = "toDos";
let todoArray = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    TodoList.removeChild(li);
    const cleanTodos = todoArray.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    todoArray = cleanTodos
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(todosLS,JSON.stringify(todoArray));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todoArray.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteTodo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    TodoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    todoArray.push(toDoObj);
    saveTodos();
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = TodoInput.value;
    paintTodo(currentValue);
    TodoInput.value = "";
}

function loadTodos(){
    const todos = localStorage.getItem(todosLS);
    if(todos !== null){
        const parsedToDos = JSON.parse(todos);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

loadTodos();
TodoForm.addEventListener("submit",handlesubmit);