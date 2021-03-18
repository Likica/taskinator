var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); // document.querySelector() - exchanged console.log for expressions to create, style new task item, add the text and append this element to the tasklist

//Add createTaskHandler function to dynamically create the task item Needs to be added BEFORE ebentlistener!
var createTaskHandler = function (event) {

    event.preventDefault();

    //add querySelector to target el by one of its attributes
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to the list item
    var taskInfoEl = document.createElement("div");
    //giv div a class name
    taskInfoEl.className = "task-info";

    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "<h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to the list
    tasksToDoEl.appendChild(listItemEl);

};

//Eventlistener 
formEl.addEventListener("submit", createTaskHandler);

