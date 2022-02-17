export const Post = ({ id, title, body }) => {
    const card = document.createElement("div");
    card.classList.add("card-post");
    card.innerHTML = `<p class="card-title">${id} ${title}</p>
    <p id="name">${body}</p>`;
    return card;
}