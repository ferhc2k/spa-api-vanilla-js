import { Menu } from "./Menu.js";
import { Search } from "./Search.js";

export const nav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.setAttribute("id", "nav");
    nav.appendChild(Search()); 
    nav.appendChild(Menu());
    return nav;
}