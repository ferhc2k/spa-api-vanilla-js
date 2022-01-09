export function commentsCard(props){
        const {name, email, body} = props;
        const card = document.createElement("div");
        card.classList.add("card-comment");
        card.innerHTML = `<p class="card-title">${email}</p><p id="name">${name}</p><p class="card-text">${body}</p>`;
        return card;
}