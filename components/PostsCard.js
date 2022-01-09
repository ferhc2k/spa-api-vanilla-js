export function postsCard(props){
    const {id, title, body} = props;
    const card = document.createElement("div");
    card.classList.add("card-post");
    card.innerHTML = `<a href="#/posts/${id}" class="card-title"><u>${title}</u></a><p class="card-text">${body}</p>`;
    return card;
}