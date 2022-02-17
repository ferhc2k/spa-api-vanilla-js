export const User = ({ username, name, address, email, phone, website }) => {
    const { street, suite, city, zipcode } = address;
    const card = document.createElement("div");
    card.classList.add("card-user");
    card.innerHTML = `
        <p class="card-title">${name}</p>
        <p id="name">Username: @${username}</p>
        <p class="card-text">Phone: ${phone}</p>
        <p class="card-text">Email: <a href="mailto:${email}" class="link">${email}</a></p>
        <p class="card-text">Website: <a href="${website}" target="_blank" class="link">${website}</a></p>
        <p class="card-text">Address: ${street} ${suite} ${city} ${zipcode}</p>
    `;
    return card;
}