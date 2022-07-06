/*
    The purpose of this component is handle all API fetch
    calls regarding technology tags.
*/


/////////////////////// GETTER FUNCTIONS ///////////////////////////////////////

    // a FN to get all the technology tags
export const getTechtags = () => {
    return fetch("http://localhost:8000/techtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

    // a FN to get a single technology tag based on ID
export const getSingleTechtag = (id) => {
    return fetch(`http://localhost:8000/techtags/${id.id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}




////////////// NON-GETTER FUNCTIONS /////////////////////////////

    // a FN to create a new technology tag
export const createTechtag = (techtag) => {
    return fetch("http://localhost:8000/techtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}
