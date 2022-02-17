export const postsCard = ({ id, title, body }) => {
    const card = document.createElement("div");
    card.classList.add("card-post");
    card.innerHTML = `
        <a href="#/posts/${id}" class="card-title"><u>${title}</u></a>
        <p class="card-text">${body}</p>
    `;
    return card;
}