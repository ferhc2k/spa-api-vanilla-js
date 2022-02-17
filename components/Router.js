import { USERS, COMMENTS, POSTS, SEARCH} from "../helpers/api.js";
import { fetchData } from "../helpers/fetch.js";
import { HeaderTitle } from './HeaderTitle.js';
import { commentsCard } from "./CommentsCard.js";
import { Comment } from './Comment.js';
import { usersCard } from './UsersCard.js';
import { User } from './User.js';
import { postsCard } from './PostsCard.js';
import { Post } from './Post.js';
import { Spinner } from './Spinner.js';

const root = document.getElementById("root");

export const Router = async () => {
    let { hash } = location;
    const page = hash.split("/")[1];
    const value = hash.split("/")[2];
    const gridData = document.getElementById("data");
    const fragment = document.createDocumentFragment();

    root.appendChild(Spinner());
    gridData.innerHTML = null; 

    if (!hash || hash === "#/comments") {
        await fetchData({
            URL: COMMENTS,
            RequestState: data => {
                data.map(comment => fragment.appendChild(commentsCard(comment)));
                gridData.appendChild(fragment); 
            }
        }) 
    } else if (hash === "#/users") {
        await fetchData({
            URL: USERS,
            RequestState: data => {
                data.map(user => fragment.appendChild(usersCard(user)));
                gridData.appendChild(fragment); 
            }
        }) 
    } else if (hash === "#/posts") {
        await fetchData({
            URL: POSTS,
            RequestState: data => {
                data.map(post => fragment.appendChild(postsCard(post)));
                gridData.appendChild(fragment); 
            }
        })
    } else if (page === "search") {
        const searchPage = hash.split("/")[2];
        const searchValue = hash.split("/")[3];
        root.insertBefore(HeaderTitle("Resultados de su busqueda"), gridData);

        if (searchPage === "users") {
            await fetchData({
                URL: SEARCH(searchPage, searchValue),
                RequestState: data => gridData.appendChild(User(data))
            })  
        } else if (searchPage === "posts") {
            await fetchData({
                URL: SEARCH(searchPage, searchValue),
                RequestState: data => gridData.appendChild(Post(data))
            }) 
        } else if (searchPage === "comments") {
            await fetchData({
                URL: SEARCH(searchPage, searchValue),
                RequestState: data => gridData.appendChild(Comment(data))
            }) 
        }
    } else {
        await fetchData({
            URL: SEARCH(page, value),
            RequestState: data => gridData.appendChild(page === "users" ? User(data) : Post(data))
        })
    }

    document.querySelector(".spinner").remove();

    ScrollReveal().reveal(`.card-comment, .card-user, .card-post`, { 
        delay: 500,
        origin: 'top'
    });
}

