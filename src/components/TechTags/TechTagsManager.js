/*
    The purpose of this component is handle all API fetch
    calls regarding technology tags.
*/


/////////////////////// GETTER FUNCTIONS ///////////////////////////////////////


export const getTechtags = () => {
    return fetch("http://localhost:8000/techtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const getSingleTechtag = (id) => {
    return fetch(`http://localhost:8000/techtags/${id.id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}




////////////////////////////////////////////////////////////////////////////////


export const createTechtag = (techtag) => {
    return fetch("http://localhost:8000/techtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const deleteTechtag = (id) => {
    
}