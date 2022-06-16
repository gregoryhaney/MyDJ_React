/*
    The purpose of this component is to provide the 
    form to be used to create a new Mood Tag.
    This is called by route: "/moodtagnewform"
*/

import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import logo from '../MyDJ-removebg.png'

export const MoodTagNewForm = () => {
    const history = useHistory()
    const [ moodtags, updateMoodtag ] = useState({
        mood_title: ""
    })

        const addNewMoodTag = (evt) => {
            evt.preventDefault()            
            
            const newMoodTag = {
                tag_title: moodtags.tag_title
            }
            
            const fetchOption = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                },
                body: JSON.stringify(newMoodTag)
            }
            return fetch("http://localhost:8000/moodtags", fetchOption)
            .then(() => {
                history.push("/moodtags")
            })
        }

    return (
        <>
            <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
                <hr className="rounded"></hr> 
            <form className="newMoodTagForm">
            <h2 className="newMoodTagForm__title">Create New Mood Tag</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="moodtag">Mood Tag:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...moodtags}
                                    copy.tag_title = evt.target.value
                                    updateMoodtag(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="New mood tag..."
                            />
                    </div>
                </fieldset>


            <br></br>
            <button onClick={addNewMoodTag} className="button">
                Save
            </button>
        </form>

        
        </>
    )

}