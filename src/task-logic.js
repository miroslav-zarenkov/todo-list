export { todoObject, taskList }


let taskList = [];


const taskFactory = (taskName, taskDate, taskCategory) => {
    return {taskName, taskDate, taskCategory}
}

let todoObject = taskFactory("task1", "task1", "task1");


(function addTaskToTaskList(){
    if (taskList === null) {
        taskList = [];
    }
    taskList.push(todoObject);
})()