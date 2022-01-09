import API from "../helpers/api.js";
export function usersCard(props){
    const {id, username, name, email, phone} = props;
    const card = document.createElement("div");
    card.classList.add("card-user");
    card.innerHTML = `<a href="#/users/${id}" class="card-title"><u>${name} (${username})</u></a>
    <p id="name">${email}</p>
    <p class="card-text">${phone}</p>`;
    return card;
}