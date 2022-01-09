import { Spinner } from './Spinner.js';
import API from "../helpers/api.js";
import { fetchAPI } from "../helpers/fetch.js";
import { HeaderTitle } from './HeaderTitle.js';
import { commentsCard } from "./CommentsCard.js";
import { Comment } from './Comment.js';
import { usersCard } from './UsersCard.js';
import { User } from './User.js';
import { postsCard } from './PostsCard.js';
import { Post } from './Post.js';

const root = document.getElementById("root");


export async function Router() {
    const gridData = document.getElementById("data");
    gridData.innerHTML = null; // Evitamos que se duplique el contenido cada vez que se detecta un cambio en el hash desde el index.js
    let {hash} = location;
    if (!hash || hash === "#/comments") {
        root.appendChild(Spinner()) // Renderizar componente
        await fetchAPI({
            URL: API.COMMENTS,
            RequestState: (data) =>{
                const fragment = document.createDocumentFragment();
                data.forEach(comment =>{
                    fragment.appendChild(commentsCard(comment)); // Insertar cada elemento a un fragment
                })
                gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
            }
        }) 
    }else if(hash === "#/users"){
        root.appendChild(Spinner()) // Renderizar componente
        await fetchAPI({
            URL: API.USERS,
            RequestState: (data) =>{
                const fragment = document.createDocumentFragment();
                data.forEach(user =>{
                    fragment.appendChild(usersCard(user)); // Insertar cada elemento a un fragment
                })
                gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
            }
        }) 
    }else if(hash === "#/posts"){
        root.appendChild(Spinner()) // Renderizar componente
        await fetchAPI({
            URL: API.POSTS,
            RequestState: (data) =>{
                const fragment = document.createDocumentFragment();
                data.forEach(post =>{
                    fragment.appendChild(postsCard(post)); // Insertar cada elemento a un fragment
                })
                gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
            }
        })
    }else{
        const page = hash.split("/")[1];
        const value = hash.split("/")[2];
        console.log(page, value)
        if (page === "users") {
            root.appendChild(Spinner()) // Renderizar componente
            await fetchAPI({
                URL: API.SEARCH(page, value),
                RequestState: (data) =>{
                    const fragment = document.createDocumentFragment();
                    fragment.appendChild(User(data)); // Insertar cada elemento a un fragment
                    gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
                }
            })
        }else if(page === "posts"){
            root.appendChild(Spinner()) // Renderizar componente
            await fetchAPI({
                URL: API.SEARCH(page, value),
                RequestState: (data) =>{
                    const fragment = document.createDocumentFragment();
                    fragment.appendChild(Post(data)); // Insertar cada elemento a un fragment
                    gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
                }
            })
        }else if(page === "search"){
            const searchPage = hash.split("/")[2];
            const searchValue = hash.split("/")[3];
            root.insertBefore(HeaderTitle("Resultados de su busqueda", searchPage), gridData)
            if (searchPage === "users") {
                root.appendChild(Spinner()) // Renderizar componente
                await fetchAPI({
                    URL: API.SEARCH(searchPage, searchValue),
                    RequestState: (data) =>{
                        const fragment = document.createDocumentFragment();
                        fragment.appendChild(User(data)); // Insertar cada elemento a un fragment
                        gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
                    }
                })  
            }else if (searchPage === "posts"){
                root.appendChild(Spinner()) // Renderizar componente
                await fetchAPI({
                    URL: API.SEARCH(searchPage, searchValue),
                    RequestState: (data) =>{
                        const fragment = document.createDocumentFragment();
                        fragment.appendChild(Post(data)); // Insertar cada elemento a un fragment
                        gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
                    }
                }) 
            }else if (searchPage === "comments"){
                root.appendChild(Spinner()) // Renderizar componente
                await fetchAPI({
                    URL: API.SEARCH(searchPage, searchValue),
                    RequestState: (data) =>{
                        const fragment = document.createDocumentFragment();
                        fragment.appendChild(Comment(data)); // Insertar cada elemento a un fragment
                        gridData.appendChild(fragment)  // Renderizar todos los componentes del fragment
                    }
                }) 
            }
            
        } 
    }

    document.querySelector(".spinner").remove();

    /*ScrollReveal().reveal(`.card-comment, .card-user, .card-post`, { 
        delay: 500,
        origin: 'top'
    });*/
}

