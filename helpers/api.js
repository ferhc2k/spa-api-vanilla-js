//https://jsonplaceholder.typicode.com/post/

const NAME = "jsonplaceholder.typicode";
const DOMAIN = `https://${NAME}.com`;
const USERS = `${DOMAIN}/users`;
const COMMENTS = `${DOMAIN}/posts/1/comments`;
const POSTS = `${DOMAIN}/users/1/posts`;
function SEARCH(page, value) {
    return `${DOMAIN}/${page}/${value}`;
} 
export default {
    NAME,
    DOMAIN,
    USERS,
    COMMENTS,
    POSTS,
    SEARCH
}