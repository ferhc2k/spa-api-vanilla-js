export const commentsCard = ({ name, email, body }) =>{
    const card = document.createElement("div");
    card.classList.add("card-comment");
    card.innerHTML = `<p class="card-title">${email}</p><p id="name">${name}</p><p class="card-text">${body}</p>`;return card;
}