import { nav } from "./components/Nav.js";
import { Data } from "./components/Data.js";
import { Router } from './components/Router.js';
export function App(){
    const root = document.getElementById("root");

    root.innerHTML = null;
    root.appendChild(nav()) // Renderizar componente
    root.appendChild(Data())  // Renderizar componente
    Router(); // Renderizar componente
    //root.appendChild(Footer()) // Renderizar componente

    
    const searchInput = document.querySelector(".input-content");
    searchInput.addEventListener("mouseover", () => {
        searchInput.classList.add("input-content-active");
        searchInput.querySelector("input").focus()
    })
    searchInput.addEventListener("mouseout", () => {
        searchInput.classList.remove("input-content-active");
    })


    const menu = document.querySelector(".menu");
    let pageLocation = location.hash.split("/")[1];
    if(location.hash.split("/")[1] === "search"){
        pageLocation = location.hash.split("/")[2];
    }

    Array.from(menu.children).forEach(item => {
        if (!location.hash) {
            menu.children[0].classList.add("menu-item-active");
            return;
        }else if(item.getAttribute("href") === location.hash.split("/")[0].concat(`/${pageLocation}`)){
            item.classList.add("menu-item-active");
            return;
        }
        item.classList.remove("menu-item-active");
    })
}



