import { Menu } from "./Menu.js";
import { Search } from "./Search.js";
export function nav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.setAttribute("id", "nav")
    nav.appendChild(Search())  //Renderizar componente
    nav.appendChild(Menu())
    return nav;
}