var userInput = document.querySelector("#userInput");
var submit = document.querySelector("#submit");
var botChat = document.querySelector("#botChat");
var user = document.querySelector("#user");

alert ("testing")

submit.addEventListener("click", response);

greetingList = ["Hello", "Hi", "Hey there", "Yo"];

greeting = Math.floor(Math.random() * greetingList.length);

function response() {
    while(botChat.textContent == "What is your name?") {
        user.style.color = "red";
        botChat.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "What is your favourite colour?" }, 2000);;
        userInput.value = null;
    } 
    while (botChat.extContent == "What is your name?") {
        setTimeout(() => {botChat.innerHtml = "What is your favourite colour?
        userInput.value = user.style.colour
        if (userInput.value == "green", "Green") {
            botChat.innerHtml = "Mine too")
        }
        else if (userInupt.value == "red", "Red", "orange", "Orange", "yellow", "Yellow", "green", "Green", "blue", "Blue", "purple", "Purple") {                          
            userInput.value = user.style.colour 
        }
        else {
            botChat.textContent = "Please enter a simple colour. Im not an expert in my colours.";
            setTimeout (() => {botChat.innerHtml = "What is your favourite colour?"}, 2000;;
            userInput.value = null;
        }
    }
}
