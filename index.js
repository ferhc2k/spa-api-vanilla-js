import { App } from './App.js';
const dom = document;
dom.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
    dom.innerHTML = "";
    dom.innerHTML = App();
})