export function Menu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = "<a href='#/comments'>Comments</a>";
    menu.innerHTML += "<a href='#/users'>Users</a>";
    menu.innerHTML += "<a href='#/posts'>Posts</a>";
    return menu;
}

