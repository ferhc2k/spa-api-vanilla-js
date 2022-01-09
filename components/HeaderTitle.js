export function HeaderTitle(_title, _page) {
    const title = document.createElement("h1");
    title.setAttribute("id", "header-title");
    title.textContent = `${_title}`;
    return title;
}
