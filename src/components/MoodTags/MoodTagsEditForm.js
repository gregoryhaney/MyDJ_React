/*
    The purpose of this component is generate the HTML (JSX)
    that will provide a form to edit a mood tag.
    This is called by route: "/entrymood/<id>"
*/

import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getSingleMoodtag } from "../MoodTags/MoodTagsManager"
import logo from '../MyDJ-removebg.png'


export const MoodEditForm = () => {
    const [ originalMood, setOriginalMood ] = useState([])
    const [ update, updatedMood ] = useState([])
    const history = useHistory()
    const id = useParams()


    useEffect(
        () => {
            getSingleMoodtag(id).then(originalMood => setOriginalMood(originalMood))
        }, [])            
                
     
        // build the object that will be sent via API when form is submitted
            // use the preventDefault FN to prevent default browser behavior
            // after the form is submitted
        const updateTheMood = (evt) => {
            evt.preventDefault()            

                const updatedMood = {
                    tag_title: update.tag_title
                }
        
            const fetchOption = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                },
                body: JSON.stringify(updatedMood)
            }
            return fetch(`http://localhost:8000/moodtags/${id.id}`, fetchOption)
                .then(() => {
                    history.push("/moodtags")
                })
        }
        

    return (
        <>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="editMoodForm__title">Edit a Mood Tag</h2>
                <hr className="rounded"></hr>
            <form className="editMoodForm">

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="moodtag">Mood Tag:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...update}
                                    copy.tag_title = evt.target.value
                                    updatedMood(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={originalMood.tag_title}
                            />
                    </div>
                </fieldset>



            <br></br>
            <button onClick={updateTheMood} className="btn btn btn-dark">
                Save Changes
            </button>

            <button className="btn btn-primary"
                    onClick={() => {
                        history.push({ pathname: '/moodtags'})
                    }}
            >Cancel</button>

                <br></br>
                <br></br>
                <hr className="rounded"></hr>   
                <br></br>
        </form>
        </>
    )
}