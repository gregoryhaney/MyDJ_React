/*
    The purpose of this component is generate the HTML (JSX)
    that will list the mood tags.
    This is called by route: "/moodtags"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getMoodtags } from "./MoodTagsManager"
import logo from '../MyDJ-removebg.png'

export const MoodtagsList = () => {
    const [ moodtags, setMoodtags ] = useState([])
    const history = useHistory()

     
            const deleteMoodtag = (id) => {
                fetch(`http://localhost:8000/moodtags/${id}`, {
                    method: "DELETE",
                    headers:{
                        "Authorization": `Token ${localStorage.getItem("auth_token")}`
                    }
                })
                    getMoodtags()
                        .then((moodtagsArray) => {
                            setMoodtags(moodtagsArray)
                    })
            }
         


            // call the FN that get all moodtags from DB via API Fetch
            useEffect(
                () => {
                getMoodtags()
                .then((moodtagsArray) => {
                    setMoodtags(moodtagsArray)
                })
                },
            []
            )   
               

    return (
        <>
                <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Mood Tags Listing</h1>
                <hr className="rounded"></hr> 

                <button className="button" onClick={() => {
                                history.push(`MoodTagNewForm`)                            
                            }}>Create a New Mood Tag</button> <br></br>
                <hr className="rounded"></hr>

            {
                moodtags.map(
                    (moodtag) => {              

                        return <div className="moodtag" key={`moodtag--${moodtag.id}`}>
                            <article className="moodtagCard"> 
                                                 
                                {moodtag.tag_title}

                                <button className="button" onClick={() => {
                                history.push(`moodedit/${moodtag.id}`)

                            }}>Edit Mood Tag</button> 

                            <button className="button" onClick={() => {
                                deleteMoodtag(moodtag.id)                            
                            }}>Delete Mood Tag</button> <br></br>

                            </article>
                        </div>                     
                        } 
                )       
            }
                <br></br>
                <hr className="rounded"></hr>   
                <br></br>  
        </>
    )
}
