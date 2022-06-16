/*
    The purpose of this component is handle all API fetch
    calls regarding journal entries.
*/

import { useParams } from "react-router-dom"

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
    return fetch(`http://localhost:8000/entries/${id.id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const getSingleEntryWithDeveloper = (id) => {
    return fetch(`http://localhost:8000/entries/${id.id}?expand=developers`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}



export const getEntriesWithDeveloper = () => {
    return fetch("http://localhost:8000/entries?expand=developers", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


////////////////////////////////////////////////////////////////////////////////




export const terminateEntry = (id) => {
    fetch(`http://localhost:8000/entries/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
}