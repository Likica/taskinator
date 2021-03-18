var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // document.querySelector() - exchanged console.log for expressions to create, style new task item, add the text and append this element to the tasklist

//Add createTaskHandler function to dynamically create the task item Needs to be added BEFORE ebentlistener!
var createTaskHandler = function (event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

};

//Eventlistener 
formEl.addEventListener("submit", createTaskHandler);

