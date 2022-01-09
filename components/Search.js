import API from "../helpers/api.js";
import { fetchAPI } from "../helpers/fetch.js";
import { User } from './User.js';
import { Post } from "./Post.js";
import { Footer } from './footer.js';
import { Spinner } from './Spinner.js';
export function Search() {
    const {hash} = location;
    const search = document.createElement("div");
    search.classList.add("input-content");
    search.innerHTML += `<i class='bx bx-search'></i>`;
    const input = document.createElement("input");
    input.setAttribute("id", "search-data");
    input.type = "number";
    search.appendChild(input);

    input.addEventListener("keydown", (e) =>{ 
        if (e.keyCode == 13) {
            let page = hash.split("/")[1];
            const value = input.value;
            if (page === "search") {
                page = hash.split("/")[2];
            }
            location.href = `#/search/${page}/${value}`
        }
    })


    /*async function dataSearch() {
        const gridData = document.getElementById("data");
        gridData.innerHTML = null;
        const page = hash.split("/")[1];
        const value = input.value;
        root.appendChild(Spinner()) // Renderizar componente
        if (value.length > 0) {
            console.log(page, value)
            if(page === "users"){ 
                await fetchAPI({
                    URL: API.SEARCH(page, value),
                    RequestState: (data) => {
                        gridData.appendChild(User(data))  // Renderizar todos los componentes del fragment
                    }
                })
            }else if(page === "posts"){
                await fetchAPI({
                    URL: API.SEARCH(page, value),
                    RequestState: (data) => {
                        gridData.appendChild(Post(data))  // Renderizar todos los componentes del fragment
                    }
                })
            }
        }
        document.querySelector(".spinner").remove();
    }*/
    return search;
}