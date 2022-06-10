/*
    The purpose of this component is handle all API fetch
    calls regarding mood tags.
*/

/////////////////////// GETTER FUNCTIONS ///////////////////////////////////////


export const getMoodtags = () => {
    return fetch("http://localhost:8000/moodtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}


export const getSingleMoodtag = (id) => {
    return fetch(`http://localhost:8000/moodtags/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}




////////////////////////////////////////////////////////////////////////////////




// export const createMoodTag = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"            
//     },
//     body: JSON.stringify(newMoodTag)
    
//     return fetch("http://localhost:8000/moodtags", fetchOption)
//     .then(() => {
//         history.pushState("/moodtags")
//     })
// }
    