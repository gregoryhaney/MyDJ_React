/*
    The purpose of this component is handle all API fetch
    calls regarding journal entries.
*/

/////////////////////// GETTER FUNCTIONS ///////////////////////////////////////


export const getEntries = () => {
    return fetch("http://localhost:8000/entries", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const getSingleEntry = (id) => {
    return fetch(`http://localhost:8000/entries/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}




////////////////////////////////////////////////////////////////////////////////
