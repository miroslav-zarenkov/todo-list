export { taskList, addTaskToTaskList, getFromLocalStorage, clearLocalStorage, addToLocalStorage };
import { createInbox, clearInput } from "./ui.js";


let taskList = [];

class Task {
    constructor(taskName, taskDetails, taskCategory, taskDate, taskPriority) {
        this.taskName = taskName;
        this.taskDetails = taskDetails;
        this.taskCategory = taskCategory;
        this.taskDate = taskDate;
        this.taskPriority = taskPriority;
        this.checked = false;
    }
}

function addTaskToTaskList() {
    if (document.querySelector("#task-name-input").value === "") {
        document.querySelector(".required").classList.remove("hidden");
        document.querySelector("#task-name-input").classList.add("red-alert");
        document.querySelector("label[for='task-name-input']").classList.add("red-alert");
    }
    else{
        if (taskList === null) {
            taskList = [];
        }
    
        const task = new Task(
            document.querySelector("#task-name-input").value,
            document.querySelector("#task-details-input").value,
            document.querySelector("#task-category-input").value,
            document.querySelector("#task-date-input").value,
            document.querySelector("#task-priority-input").value,
        )
    
        taskList.push(task);
        addToLocalStorage();
        clearInput();
        createInbox(event);
    }
}

function addToLocalStorage() {
    localStorage.setItem("taskListLocal", JSON.stringify(taskList));
}

function getFromLocalStorage() {
    taskList = JSON.parse(localStorage.getItem("taskListLocal"));
}

function clearLocalStorage() {
    localStorage.clear();
}