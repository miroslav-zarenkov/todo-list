export { renderPage, clearContent, createInbox, toggleAddTaskContainer };
import './style.css';
import GithubLogo from './github.png';
import TrashImage from './trash.png'
import { taskList, addTaskToTaskList, getFromLocalStorage, clearLocalStorage, setEmptyArrayTaskList,addToLocalStorage } from './task-logic';


const renderPage = () => {
    getFromLocalStorage();
    createPage();
};

const createWrapper = () => {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');
    
    window.addEventListener("resize", function(){
        if (window.innerWidth > 500) {
            document.querySelector("main").classList.remove("active-overlay")
            document.querySelector(".menu").classList.remove("active-overlay");
            document.querySelector(".menu-button").classList.remove("change");
        }
    });
    
    return mainWrapper;
}

const createHeader = () => {
    const header = document.createElement("header");
    const headerName = document.createElement("h1");
    headerName.textContent = "Todo List";
    const headerMenuButton = document.createElement("div");
    headerMenuButton.classList.add("menu-button");
    const headerMenuButtonRow1 = document.createElement("div");
    headerMenuButtonRow1.classList.add("menu-button-row-1");
    const headerMenuButtonRow2 = document.createElement("div");
    headerMenuButtonRow2.classList.add("menu-button-row-2");
    const headerMenuButtonRow3 = document.createElement("div");
    headerMenuButtonRow3.classList.add("menu-button-row-3");
    header.appendChild(headerName);
    header.appendChild(headerMenuButton);
    headerMenuButton.appendChild(headerMenuButtonRow1);
    headerMenuButton.appendChild(headerMenuButtonRow2);
    headerMenuButton.appendChild(headerMenuButtonRow3);
    headerMenuButton.addEventListener('click', () => {
    headerMenuButton.classList.toggle("change");
    });
    headerMenuButton.addEventListener('click', () => {
        document.querySelector("main").classList.toggle("active-overlay");
        document.querySelector(".menu").classList.toggle("active-overlay");
    });

    const trash = document.createElement("button");
    trash.textContent = "Delete local storage";
    trash.addEventListener("click", clearLocalStorage);
    header.appendChild(trash);
    
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("menu");
    const mainMenuDivNav = document.createElement("nav");
    const mainMenuDivNavUl = document.createElement("ul");
    mainMenuDivNavUl.classList.add("base-list");
    const mainMenuDivNavUlProject = document.createElement("ul");
    mainMenuDivNavUlProject.classList.add("projects-list");
    const mainMenuDivNavUlLi1 = document.createElement("li");
    mainMenuDivNavUlLi1.classList.add("nav-list-inbox");
    mainMenuDivNavUlLi1.textContent = "Inbox";
    const mainMenuDivNavUlLi2 = document.createElement("li");
    mainMenuDivNavUlLi2.classList.add("nav-list-today");
    mainMenuDivNavUlLi2.textContent = "Today";
    const mainMenuDivNavUlLi3 = document.createElement("li");
    mainMenuDivNavUlLi3.classList.add("nav-list-week");
    mainMenuDivNavUlLi3.textContent = "This Week"
    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("content");
    main.appendChild(mainMenuDiv);
    mainMenuDiv.appendChild(mainMenuDivNav);
    mainMenuDivNav.appendChild(mainMenuDivNavUl);
    mainMenuDivNav.appendChild(mainMenuDivNavUlProject);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi1);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi2);
    mainMenuDivNavUl.appendChild(mainMenuDivNavUlLi3);
    main.appendChild(mainContentDiv);
    
    return main;
}




const createFooter = () => {
    const footer = document.createElement("footer");
    const footerDiv = document.createElement("div");
    const footerLink = document.createElement("a");
    const footerLinkImg = document.createElement("img");
    footerLinkImg.classList.add('github-logo');
    footerLinkImg.setAttribute("src", GithubLogo);
    footerDiv.textContent = "Developed by miroslav-zarenkov";
    footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
    footerLink.setAttribute("target", "_blank");
    footerLink.setAttribute("rel", "noopener noreferrer");
    footer.appendChild(footerDiv);
    footer.appendChild(footerLink);
    footerLink.appendChild(footerLinkImg);
    return footer;
}

const createPage = () => {
    document.body.appendChild(createWrapper());
    document.querySelector(".main-wrapper").appendChild(createHeader());
    document.querySelector(".main-wrapper").appendChild(createMain());
    document.querySelector(".main-wrapper").appendChild(createFooter());
    createInbox();
    document.querySelector(".nav-list-inbox").addEventListener("click", createInbox);
    document.querySelector(".nav-list-today").addEventListener("click", createToday);
    document.querySelector(".nav-list-week").addEventListener("click", createWeek);
    createProjectList();
}

const clearContent = (nodeToClear) => {
    let myNode = document.querySelector(nodeToClear);
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
}
}

const createInbox = () => {
    clearContent(".content");
    const inboxWrapper = document.createElement("div");
    inboxWrapper.classList.add("inbox-wrapper");
    const inboxHeader = document.createElement("h2");
    inboxHeader.textContent = "Inbox";
    inboxWrapper.appendChild(inboxHeader);
    document.querySelector(".content").appendChild(inboxWrapper);
    const listWrapper = document.createElement("div");
    listWrapper.classList.add("list-wrapper");
    inboxWrapper.appendChild(listWrapper);
    createTaskElement();
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn", "active");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.addEventListener("click", toggleAddTaskContainer);
    inboxWrapper.appendChild(addTaskBtn);
    addTaskContainer();
}


const createToday = () => {
    clearContent(".content");
    const todayWrapper = document.createElement("div");
    todayWrapper.classList.add("today-wrapper");
    const todayHeader = document.createElement("h2");
    todayHeader.textContent = "Today";
    todayWrapper.appendChild(todayHeader);
    document.querySelector(".content").appendChild(todayWrapper);
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(taskList);
    todayWrapper.appendChild(taskObjectsList);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    todayWrapper.appendChild(addTaskBtn);
}

const createWeek = () => {
    clearContent(".content");
    const weekWrapper = document.createElement("div");
    weekWrapper.classList.add("week-wrapper");
    const weekHeader = document.createElement("h2");
    weekHeader.textContent = "This Week";
    weekWrapper.appendChild(weekHeader);
    document.querySelector(".content").appendChild(weekWrapper);
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(taskList);
    weekWrapper.appendChild(taskObjectsList);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    weekWrapper.appendChild(addTaskBtn);
}

const createTaskElement = () => {
    
    if (taskList === null) setEmptyArrayTaskList();
    for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i]);
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("data-number", i);
    if (taskList[i].taskPriority === "high") taskCard.classList.add("high-importance");
    if (taskList[i].taskPriority === "medium") taskCard.classList.add("medium-importance");
    if (taskList[i].taskPriority === "low") taskCard.classList.add("low-importance");
    if (taskList[i].checked === true) taskCard.classList.add("checked");
    
    const taskCardCheck = document.createElement("input");
    taskCardCheck.setAttribute("type", "checkbox");
    if (taskList[i].checked === true) taskCardCheck.checked = true;
    const taskCardName = document.createElement("div");
    taskCardName.classList.add("small-task-name")
    taskCardName.textContent = taskList[i].taskName;
    
    const taskCardDate = document.createElement("div");
    taskCardDate.classList.add("small-task-date");
    taskCardDate.textContent = taskList[i].taskDate;

    const smallTaskInfo = document.createElement("div");
    smallTaskInfo.classList.add("small-task-info");

    const bigTaskInfo = document.createElement("div");
    bigTaskInfo.classList.add("big-task-info");
    bigTaskInfo.classList.add("inactive");
    bigTaskInfo.textContent = "ads";

    const deleteTaskBtn = document.createElement("img");
    deleteTaskBtn.classList.add("trash-btn");
    deleteTaskBtn.setAttribute("src", TrashImage);
    
    smallTaskInfo.appendChild(taskCardCheck);
    smallTaskInfo.appendChild(taskCardName);
    smallTaskInfo.appendChild(taskCardDate);
    smallTaskInfo.appendChild(deleteTaskBtn);
    
    taskCard.appendChild(smallTaskInfo);
    taskCard.appendChild(bigTaskInfo);
    document.querySelector(".list-wrapper").appendChild(taskCard);
    }

    const checkBtns = document.querySelectorAll("input[type=checkbox]")
    checkBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            event.stopPropagation();
            btn.checked != btn.checked;
            const taskNumber = btn.parentElement.parentElement.getAttribute("data-number");
            taskList[taskNumber].checked = btn.checked;
            console.log(taskList[taskNumber].checked)
            document.querySelector(`[data-number="${taskNumber}"]`).classList.toggle("checked");;
            addToLocalStorage();
        })
    })

    const deleteBtn = document.querySelectorAll(".trash-btn");
    deleteBtn.forEach(btn => {
        btn.addEventListener("click", event => {
            event.stopPropagation();
            const taskNumber = btn.parentElement.parentElement.getAttribute("data-number");
            taskList.splice(taskNumber, 1)
            console.log(taskList);
            addToLocalStorage();
            createInbox();
            createProjectList();
        })
    })

    const taskDiv = document.querySelectorAll(".task-card");
    taskDiv.forEach(div => {
        div.addEventListener("click", event => {
            const taskNumber = div.getAttribute("data-number");
            document.querySelector(`[data-number="${taskNumber}"]`).lastChild.classList.toggle("inactive");
     /*        console.log(taskList);
            const taskNumber = btn.parentElement.getAttribute("data-number");
            taskList.splice(taskNumber, 1)
            console.log(taskList);
            addToLocalStorage();
            createInbox(); */
        })
    })
}



    /* taskList.forEach(element => {
    const taskObjectsList = document.createElement("div");
    taskObjectsList.textContent = JSON.stringify(element);
    document.querySelector(".list-wrapper").appendChild(taskObjectsList);
}); */


const addTaskContainer =() => {
    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container", "inactive");
    document.querySelector(".inbox-wrapper").appendChild(addTaskContainer);
    const addTaskForm = document.createElement("form");
    addTaskForm.setAttribute("action", "#");
    addTaskForm.setAttribute("method", "post");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute("for", "task-name-input");
    taskNameLabel.textContent = "Task Name";
    const taskNameLabelInput = document.createElement("input");
    taskNameLabelInput.setAttribute("type", "text");
    taskNameLabelInput.setAttribute("id", "task-name-input");
    taskNameLabelInput.setAttribute("name", "task-name-input");
    taskNameLabel.appendChild(taskNameLabelInput);

    const taskDetailsLabel = document.createElement("label");
    taskDetailsLabel.setAttribute("for", "task-detail-input");
    taskDetailsLabel.textContent = "Task Details";
    const taskDetailsLabelInput = document.createElement("textarea");
    taskDetailsLabelInput.setAttribute("id", "task-details-input");
    taskDetailsLabelInput.setAttribute("name", "task-details-input");
    taskDetailsLabel.appendChild(taskDetailsLabelInput);

    const taskCategoryLabel = document.createElement("label");
    taskCategoryLabel.setAttribute("for", "task-category-input");
    taskCategoryLabel.textContent = "Task Category";
    const taskCategoryLabelInput = document.createElement("input");
    taskCategoryLabelInput.setAttribute("type", "text");
    taskCategoryLabelInput.setAttribute("id", "task-category-input");
    taskCategoryLabelInput.setAttribute("name", "task-category-input");
    taskCategoryLabel.appendChild(taskCategoryLabelInput);

    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute("for", "task-date-input");
    taskDateLabel.textContent = "Task Date";
    const taskDateLabelInput = document.createElement("input");
    taskDateLabelInput.setAttribute("type", "date");
    taskDateLabelInput.setAttribute("id", "task-date-input");
    taskDateLabelInput.setAttribute("name", "task-date-input");
    taskDateLabel.appendChild(taskDateLabelInput);

    const taskPriorityabel = document.createElement("label");
    taskPriorityabel.setAttribute("for", "task-priority-input");
    taskPriorityabel.textContent = "Task Priority";
    const taskPriorityLabelInput = document.createElement("select");
    const taskPriorityLabelInputNone = document.createElement("option");
    taskPriorityLabelInputNone.textContent = "";
    taskPriorityLabelInputNone.setAttribute("value", "none");
    const taskPriorityLabelInputLow = document.createElement("option");
    taskPriorityLabelInputLow.textContent = "Low";
    taskPriorityLabelInputLow.setAttribute("value", "low");
    const taskPriorityLabelInputMedium = document.createElement("option");
    taskPriorityLabelInputMedium.textContent = "Medium";
    taskPriorityLabelInputMedium.setAttribute("value", "medium");
    const taskPriorityLabelInputHigh = document.createElement("option");
    taskPriorityLabelInputHigh.textContent = "High";
    taskPriorityLabelInputHigh.setAttribute("value", "high");
    taskPriorityLabelInput.setAttribute("id", "task-priority-input");
    taskPriorityLabelInput.setAttribute("name", "task-priority-input");
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputNone);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputLow);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputMedium);
    taskPriorityLabelInput.appendChild(taskPriorityLabelInputHigh);
    taskPriorityabel.appendChild(taskPriorityLabelInput);

    addTaskForm.appendChild(taskNameLabel);
    addTaskForm.appendChild(taskDetailsLabel);
    addTaskForm.appendChild(taskCategoryLabel);
    addTaskForm.appendChild(taskDateLabel);
    addTaskForm.appendChild(taskPriorityabel);
    addTaskContainer.appendChild(addTaskForm);

    const addTaskContainerButtons = document.createElement('div');
    addTaskContainerButtons.classList.add('add-task-buttons-wrapper');
    addTaskContainer.appendChild(addTaskContainerButtons);
    const addTaskContainerConfirmBtn = document.createElement("button");
    addTaskContainerConfirmBtn.classList.add("confirm-new-task");
    addTaskContainerConfirmBtn.textContent = "Confirm";
    addTaskContainerButtons.appendChild(addTaskContainerConfirmBtn);
    addTaskContainerConfirmBtn.addEventListener("click", addTaskToTaskList);
    addTaskContainerConfirmBtn.addEventListener("click", createProjectList);
    const addTaskContainerCancelBtn = document.createElement("button");
    addTaskContainerCancelBtn.classList.add("cancel-new-task");
    addTaskContainerCancelBtn.textContent = "Cancel";
    addTaskContainerButtons.appendChild(addTaskContainerCancelBtn);
    addTaskContainerCancelBtn.addEventListener("click", toggleAddTaskContainer);
    addTaskContainerCancelBtn.addEventListener("click", clearInput);

    
}

const toggleAddTaskContainer = () => {
    document.querySelector(".add-task-container").classList.toggle("inactive");
    document.querySelector(".add-task-container").classList.toggle("active");
    document.querySelector(".add-task-btn").classList.toggle("inactive");
    document.querySelector(".add-task-btn").classList.toggle("active");
}

const clearInput = () => {
    document.querySelector("#task-name-input").value = "";
    document.querySelector("#task-details-input").value = "";
    document.querySelector("#task-category-input").value = "";
}
const createProjectList = () => {
    clearContent(".projects-list");
   /*  let myNode = document.querySelector(".projects-list");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }  */

    let navSet = new Set();
    taskList.forEach(task => navSet.add(task["taskCategory"]));
    console.log(navSet);
    navSet.forEach(item => {
        if (item === "") return;
        const newProjectInList = document.createElement("li");
        newProjectInList.textContent = item;
        document.querySelector(".projects-list").appendChild(newProjectInList);
    })
}