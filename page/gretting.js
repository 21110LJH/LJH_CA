const form = document.querySelector(".jsForm");
const formInput = document.querySelector("input");
const greeting = document.querySelector(".greetings");
const userLS = "currentUser";
const showingCN = "showing";
const input = form.querySelector("input");

function saveName(text){
    localStorage.setItem(userLS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(showingCN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(showingCN);
    greeting.classList.add(showingCN);
    greeting.innerText = "Hello "+text;
}

function loadName(){
    const currentUser = localStorage.getItem(userLS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

loadName();