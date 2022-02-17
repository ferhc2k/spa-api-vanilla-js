export const Menu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
        <a href='#/comments'>Comments</a>
        <a href='#/users'>Users</a>
        <a href='#/posts'>Posts</a>
    `;

    let pageLocation = location.hash.split("/")[1];

    console.log(location.hash.split("/")[0])

    if(location.hash.split("/")[1] === "search") pageLocation = location.hash.split("/")[2];

    Array.from(menu.children, item => {
        if (!location.hash) {
            menu.children[0].classList.add("menu-item-active");
        } else if (item.getAttribute("href") === `#/${pageLocation}`){
            item.classList.add("menu-item-active");
        }
    })

    return menu;
}

