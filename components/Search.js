export const Search = () => {
    const { hash } = location;
    const search = document.createElement("div");
    const input = document.createElement("input");
    search.classList.add("input-content");
    search.innerHTML += `<i class='bx bx-search'></i>`;
    input.setAttribute("id", "search-data");
    search.appendChild(input);

    search.addEventListener("mouseover", () => {
        search.classList.add("input-content-active");
        search.querySelector("input").focus();
    })

    search.addEventListener("mouseout", () => search.classList.remove("input-content-active"));

    input.addEventListener("keydown", e =>{ 
        if (e.keyCode == 13) {
            let page = hash.split("/")[1];
            const value = input.value;
            if (page === "search") page = hash.split("/")[2];
            location.href = `#/search/${page}/${value}`;
        }
    })

    return search;
}