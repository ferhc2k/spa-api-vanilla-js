export const NAME = "jsonplaceholder.typicode";
export const DOMAIN = `https://${NAME}.com`;
export const USERS = `${DOMAIN}/users`;
export const COMMENTS = `${DOMAIN}/posts/1/comments`;
export const POSTS = `${DOMAIN}/users/1/posts`;
export const SEARCH = (page, value) => `${DOMAIN}/${page}/${value}`;
