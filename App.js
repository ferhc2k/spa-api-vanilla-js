import { nav } from "./components/Nav.js";
import { Data } from "./components/Data.js";
import { Router } from './components/Router.js';

export const App = () => {
    const root = document.getElementById("root");
    root.innerHTML = null;
    root.appendChild(nav()); // Renderizar componente
    root.appendChild(Data());  // Renderizar componente
    Router(); // Renderizar componente
}



