export { renderPage };
import './style.css';
import GithubLogo from './github.png';
import { taskList } from './task-logic';


const renderPage = () => {
    createWrapper();
    createHeader();
    createMain();
    createFooter();
    createPage();
    addTaskContainer();
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
    return header;
}

const createMain = () => {
    const main = document.createElement("main");
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("menu");
    const mainMenuDivNav = document.createElement("nav");
    const mainMenuDivNavUl = document.createElement("ul");
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
}

const clearContent = () => {
    let myNode = document.querySelector(".content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
}}

const createInbox = () => {
    clearContent();
    const inboxWrapper = document.createElement("div");
    inboxWrapper.classList.add("inbox-wrapper");
    const inboxHeader = document.createElement("h2");
    inboxHeader.textContent = "Inbox";
    inboxWrapper.appendChild(inboxHeader);
    document.querySelector(".content").appendChild(inboxWrapper);

    createTaskElement();

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.addEventListener("click", addTask);
    inboxWrapper.appendChild(addTaskBtn);
    
}


const createToday = () => {
    clearContent();
    const todayWrapper = document.createElement("div");
    todayWrapper.classList.add("today-wrapper");
    const todayHeader = document.createElement("h2");
    todayHeader.textContent = "Today";
    todayWrapper.appendChild(todayHeader);
    document.querySelector(".content").appendChild(todayWrapper);
    const mainObj = document.createElement("div");
    mainObj.textContent = JSON.stringify(taskList);
    todayWrapper.appendChild(mainObj);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    todayWrapper.appendChild(addTaskBtn);
}

const createWeek = () => {
    clearContent();
    const weekWrapper = document.createElement("div");
    weekWrapper.classList.add("week-wrapper");
    const weekHeader = document.createElement("h2");
    weekHeader.textContent = "This Week";
    weekWrapper.appendChild(weekHeader);
    document.querySelector(".content").appendChild(weekWrapper);
    const mainObj = document.createElement("div");
    mainObj.textContent = JSON.stringify(taskList);
    weekWrapper.appendChild(mainObj);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    weekWrapper.appendChild(addTaskBtn);
}

const createTaskElement = () => {
    taskList.forEach(element => {
    const mainObj = document.createElement("div");
    mainObj.textContent = JSON.stringify(element);
    document.querySelector(".inbox-wrapper").appendChild(mainObj);
});
}

const addTaskContainer =() => {
    const addTaskContainer = document.createElement("div");
    addTaskContainer.classList.add("add-task-container", "popup-inactive");
    addTaskContainer.textContent = "test div";
    document.querySelector(".main-wrapper").appendChild(addTaskContainer);
}

const addTask = () => {
    document.querySelector(".add-task-container").classList.toggle("popup-inactive");
    document.querySelector("header").classList.toggle("blur");
    document.querySelector("main").classList.toggle("blur");
    document.querySelector("footer").classList.toggle("blur");
}

const consoleKek = () => {
    console.log("kek");
}