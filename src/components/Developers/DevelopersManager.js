/*
    The purpose of this component is handle all API fetch
    calls regarding developers.
*/


    // a FN to retrieve all the developers
export const getDevelopers = () => {
    return fetch("http://localhost:8000/developers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

    // a FN to retrieve a single developer based on ID
export const getSingleDeveloper = (id) => {
    return fetch(`http://localhost:8000/developers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
