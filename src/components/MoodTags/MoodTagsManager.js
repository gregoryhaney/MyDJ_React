/*
    The purpose of this component is handle all API fetch
    calls regarding mood tags.
*/

/////////////////////// GETTER FUNCTIONS ///////////////////////////////////////

    // a FN to get ALL the mood tags
export const getMoodtags = () => {
    return fetch("http://localhost:8000/moodtags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

    // a FN to get a single mood tag based on ID
export const getSingleMoodtag = (id) => {
    return fetch(`http://localhost:8000/moodtags/${id.id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
}

