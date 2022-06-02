export { renderPage };
import './style.css';
import GithubLogo from './github.png';


const renderPage = () => {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-wrapper');

    const header = document.createElement("header");
    const headerName = document.createElement("h1");
    headerName.textContent = "Todo List";
    header.appendChild(headerName);

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