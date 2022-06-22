/*
    The purpose of this component is generate the HTML (JSX)
    that will provide a form to edit a journal entry.
    This is called by route: "/entryedit"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getSingleEntry } from "./JournalEntriesManager"
import { getMoodtags } from "../MoodTags/MoodTagsManager"
import { getTechtags } from "../TechTags/TechTagsManager"
import logo from '../MyDJ-removebg.png'
import { useParams } from "react-router-dom"

export const EntryEditForm = () => {
    const [ update, updatedEntry ] = useState([])
    const [ moodtags, setMoodtags ] = useState([])
    const [ techtags, setTechtags ] = useState([])
    const [ originalEntry, setOriginalEntry ] = useState({})
    const history = useHistory()
    const id = useParams()

   
    // call FNs to fetch:
        // 1. single entry using the passed entry.id
        // 2. all mood tags
        // 3. all tech tags

    useEffect(
        () => {
            getSingleEntry(id)
                .then((originalEntryArray) => {
                    setOriginalEntry(originalEntryArray)
                })
            }, []
            )

    useEffect(
        () => {
            getMoodtags()
                .then((moodtagsArray) => {
                    setMoodtags(moodtagsArray)
                })
            }, []
            )

    useEffect(
        () => {
            getTechtags()
                .then((techtagsArray) => {
                    setTechtags(techtagsArray)              
                })
            }, []
            )
        
           
            // build the object that will be sent via API when form is submitted
            // use the preventDefault FN to prevent default browser behavior
            // after the form is submitted
            const updateTheEntry = (evt) => {
                evt.preventDefault()   
                
                const updatedEntry = {
                    subject: update.subject,
                    body: update.body,
                    is_public: update.is_public,
                    techtag: update.techtag,
                    moodtag: update.moodtag
                }
           
        
            const fetchOption = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                },
                body: JSON.stringify(updatedEntry)
            }
            return fetch(`http://localhost:8000/entries/${id.id}`, fetchOption)
                .then(() => {
                    history.push("/entries")
                })
        }
    
   
    return (
        <>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" />
                <hr className="rounded"></hr>
            <form className="editEntryForm">
            <h2 className="editEntryForm__title">Edit a Journal Entry</h2>

                <fieldset>
                    <div className="form-group">
                        <section 
                                key={`entry--${originalEntry.id}`} 
                                className="entryEditForm"
                                value={originalEntry.subject}>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...update}
                                    copy.subject = evt.target.value
                                    updatedEntry(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={originalEntry.subject}
                            />
                        </section>
                    </div>
                </fieldset>



                <fieldset>
                    <div className="form-group">
                        <label htmlFor="body">Body of the text:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...update}
                                    copy.body = evt.target.value
                                    updatedEntry(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={originalEntry.body}
                            />
                    </div>
                </fieldset>


                <fieldset>
                    <div className="form-group">
                        <label htmlFor="isPublic">Public or Private?</label><br></br>
                        <select value={originalEntry.is_public}
                        
                            onChange={
                                (evt) => {
                                    const copy = {...update}
                                    copy.is_public = evt.target.value
                                    updatedEntry(copy)
                        }}>
                        
                            <option value="0">It is...</option>
                            <option value="True">Public</option>
                            <option value="False">Private</option>
                            
                        </select>
                    </div>
                </fieldset>


                <fieldset>
                <div className="form-group">
                    <label htmlFor="techtag">Tech Tag:</label><br></br>
                    <h6>Hold down [command] on Mac or [ctrl] on Windows to select multiple tags</h6>
                    <select  multiple={true}
                        onChange={
                            (evt) => {
                                    // create empty array to hold selected tech ids
                                let techvalues = []                                    
                                const copy = {...update}

                                    // for loop to push the selected tech id to
                                    // the array 
                                        // run it as many times as there are selections

                                    for (let i = 0; i < evt.target.options.length; i++) {                                     
                                            if (evt.target.options[i].selected == true) {
                                            techvalues.push(evt.target.options[i].value)
                                            }
                                    }
                                copy.techtag = techvalues                                            
                                updatedEntry(copy)                        
                            }
                    }>
                        <option value="0">Select the tech tag...</option>
                                {techtags.map(techtag => {
                                    return <option value={techtag.id}>
                                                {techtag.tech_title}                                  
                                            </option>                        
                                })}  
                    </select>
                </div>
                </fieldset>



                <fieldset>
                <div className="form-group">
                    <label htmlFor="moodtag">Mood Tag:</label><br></br>
                    <h6>Hold down [command] on Mac or [ctrl] on Windows to select multiple tags</h6>
                    <select  multiple={true}
                        onChange={
                            (evt) => {
                                    // create empty array to hold selected mood ids
                                let moodvalues = []                                    
                                const copy = {...update}

                                    // for loop to push the selected mood id to
                                    // the array 
                                        // run it as many times as there are selections

                                    for (let i = 0; i < evt.target.options.length; i++) {                           
                                            if (evt.target.options[i].selected == true) {
                                            moodvalues.push(evt.target.options[i].value)
                                            }
                                    }
                                copy.moodtag = moodvalues
                                updatedEntry(copy)                        
                            }
                    }>
                        <option value="0">Select the mood tag...</option>
                                {moodtags.map(moodtag => {
                                    return <option value={moodtag.id}>
                                                {moodtag.tag_title}                                  
                                            </option>                        
                                })}  
                    </select>
                </div>
                </fieldset>


                    <br></br>
                    <button onClick={updateTheEntry} className="btn btn-outline-primary">
                        Save Changes
                    </button>

                    <button className="btn btn-primary"
                        onClick={() => {
                            history.push({ pathname: "/myentrieslist"})}}>
                        Cancel
                    </button>
                    <br></br><br></br><br></br>
                                    <hr className="rounded"></hr>

            </form>
        </>
    )

}









