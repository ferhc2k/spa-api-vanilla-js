export async function fetchAPI(props){
    /*function isObjEmpty(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
    }*/
    let {URL, RequestState} = props;
    await fetch(URL)
        .then(response => (response.ok) ? response.json() : Promise.reject(response))
        .then(data => RequestState(data))
        .catch(error => {
            let msgError = "";
            if (error.status === 0) {
                msgError = error.message || "Not connected. Please verify your network connection.";
            } else if (error.status == 404) {
                msgError = error.message || "The requested page not found.";
            } else if (error.status == 500) {
                msgError = error.message || "Internal Server Error.";
            } else {
                msgError = "Uncaught  Error."; 
            }
            document.getElementById("data").innerHTML = `<div class="error-alert"><p>${msgError}<br>${error.status}</p></div>`;
        })
}