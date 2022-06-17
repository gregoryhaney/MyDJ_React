/*
    The purpose of this component is handle all API fetch
    calls regarding developers.
*/


export const getDevelopers = () => {
    return fetch("http://localhost:8000/developers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

export const getSingleDeveloper = (id) => {
    return fetch(`http://localhost:8000/developers/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
