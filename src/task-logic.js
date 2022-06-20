export { taskList, addTaskToTaskList, getFromLocalStorage, clearLocalStorage, setEmptyArrayTaskList, addToLocalStorage };
import { clearContent, createInbox, toggleAddTaskContainer } from "./ui.js";


let taskList = [];

function setEmptyArrayTaskList(){
    taskList = [];
}

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
    if (taskList === null) {
        setEmptyArrayTaskList();
    }

    let task = new Task(
        document.querySelector("#task-name-input").value,
        document.querySelector("#task-details-input").value,
        document.querySelector("#task-category-input").value,
        document.querySelector("#task-date-input").value,
        document.querySelector("#task-priority-input").value,
    )

    taskList.push(task);
    addToLocalStorage();
    document.querySelector("#task-name-input").value = "";
    document.querySelector("#task-details-input").value = "";
    document.querySelector("#task-category-input").value = "";
    document.querySelector("#task-date-input").value = "";
    document.querySelector("#task-priority-input").value = "";
    createInbox();
}

/* const taskFactory = (taskName, taskDetails, taskCategory) => {
    return {taskName, taskDetails, taskCategory}
} */

/* let todoObject1 = taskFactory("task1", "task1", "task1");
let todoObject2 = taskFactory("task2", "task2", "task2"); */

/* (function addTaskToTaskList(){
    if (taskList === null) {
        taskList = [];
    }
    taskList.push(todoObject1);
    taskList.push(todoObject2);
})() */

function addToLocalStorage() {
    localStorage.setItem("taskListLocal", JSON.stringify(taskList));
}

function getFromLocalStorage() {
    taskList = JSON.parse(localStorage.getItem("taskListLocal"));
}

function clearLocalStorage() {
    localStorage.clear();
}