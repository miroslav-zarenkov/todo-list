export { renderPage };
import './style.css';
import GithubLogo from './github.png';


const renderPage = () => {
    function changeMenuButton(){
        headerMenuButton.classList.toggle("change");
    }
    function toogleSidebar(){
        main.classList.toggle("active-overlay");
        mainMenuDiv.classList.toggle("active-overlay");
    }
    

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');

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
    headerMenuButton.addEventListener('click', changeMenuButton);
    headerMenuButton.addEventListener('click', toogleSidebar)

    const main = document.createElement("main");
    const mainMenuDiv = document.createElement("div");
    mainMenuDiv.classList.add("menu");
    mainMenuDiv.textContent = "Inbox";
    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("content");
    mainContentDiv.textContent = "Add Task";
    main.appendChild(mainMenuDiv);
    main.appendChild(mainContentDiv);
    
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

    document.body.appendChild(mainWrapper);
    mainWrapper.appendChild(header);
    mainWrapper.appendChild(main);
    mainWrapper.appendChild(footer);
};