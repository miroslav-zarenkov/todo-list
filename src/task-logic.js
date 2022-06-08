export { taskList }


let taskList = [];


const taskFactory = (taskName, taskDate, taskCategory) => {
    return {taskName, taskDate, taskCategory}
}

let todoObject1 = taskFactory("task1", "task1", "task1");
let todoObject2 = taskFactory("task2", "task2", "task2");
let todoObject3 = taskFactory("task3", "task3", "task3");

(function addTaskToTaskList(){
    if (taskList === null) {
        taskList = [];
    }
    taskList.push(todoObject1);
    taskList.push(todoObject2);
    taskList.push(todoObject3);
})()

function addToLocalStorage() {
    localStorage.setItem("taskListLocal", JSON.stringify(taskList));
}

function getFromLocalStorage() {
    taskList = JSON.parse(localStorage.getItem("taskListLocal"));
}

function clearLocalStorage() {
    localStorage.clear();
}