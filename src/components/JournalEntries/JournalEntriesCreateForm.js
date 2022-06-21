/*
    The purpose of this component is generate the HTML (JSX)
    that will provide a form to create a journal entry.
    This is called by route: "/entrynewform"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import logo from '../MyDJ-removebg.png'

export const EntryCreateForm = () => {
    const [ entry, updateEntry ] = useState([])
    const [ moodtags, setMoodtags ] = useState([])
    const [ techtags, setTechtags ] = useState([])
    const history = useHistory()
   

    useEffect(
        () => {
            fetch("http://localhost:8000/techtags", {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                }}
            )
            .then(res => res.json())
            .then((techtagsArray) => {
                setTechtags(techtagsArray)
            })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8000/moodtags", {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                }})
            .then(res => res.json())
            .then((moodtagsArray) => {
                setMoodtags(moodtagsArray)
            })
        },
        []
    )

        // build the object that will be sent via API when form is submitted
            // use the preventDefault FN to prevent default browser behavior
            // after the form is submitted
        const addNewEntry = (evt) => {
            evt.preventDefault()
            

                const newEntry = {
                    datetime: new Date(),
                    subject: entry.subject,
                    body: entry.body,
                    is_public: entry.is_public,
                    techtag: entry.techtag,
                    moodtag: entry.moodtag,
                    developer: 6
                }
        
            const fetchOption = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                },
                body: JSON.stringify(newEntry)
            }
            return fetch("http://localhost:8000/entries", fetchOption)
                .then(() => {
                    history.push("/entries")
                })
            }
        
    

    return (
        <>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" /> 
            <h1 className="newEntryForm__title">Add New Journal Entry</h1>
                <hr className="rounded"></hr>
            <form className="newEntryForm">

                <fieldset>  
                    <div className="form-group" key={`entry--${entry.id}`}>                 
                        <label htmlFor="subject">Subject:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...entry}
                                    copy.subject = evt.target.value
                                    updateEntry(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Subject..."
                            />
                    </div>                    
                </fieldset>



                <fieldset>
                    <div className="form-group" key={`entry--${entry.id}`}>
                        <label htmlFor="body">Body of the text:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...entry}
                                    copy.body = evt.target.value
                                    updateEntry(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Journal entry narrative/body..."
                            />
                    </div>
                </fieldset>


                <fieldset>
                <div className="form-group" key={`entry--${entry.id}`}>
                    <label htmlFor="isPublic">Public or Private?</label><br></br>
                    <select defaultValue={'0'}
                        onChange={
                            (evt) => {
                                const copy = {...entry}
                                copy.is_public = evt.target.value
                                updateEntry(copy)
                    }}>
                        <option value="0">It is...</option>
                        <option value="True">Public</option>
                        <option value="False">Private</option>
                           
                    </select>
                </div>
                </fieldset>


  
                <fieldset>
                <div className="form-group"key={`entry--${entry.id}`}>
                    <label htmlFor="techtag">Tech Tag</label><br></br>
                    <h6>Hold down [command] on Mac or [ctrl] on Windows to select multiple tags</h6>
                    <select  multiple={true}
                        onChange={
                            (evt) => {
                                    // create empty array to hold selected tech ids
                                let techvalues = []                                    
                                const copy = {...entry}

                                    // for loop to push the selected tech id to
                                    // the array 
                                        // run it as many times as there are selections

                                    for (let i = 0; i < evt.target.options.length; i++) {                                     
                                            if (evt.target.options[i].selected == true) {
                                            techvalues.push(evt.target.options[i].value)
                                            }
                                    }
                                copy.techtag = techvalues                                            
                                updateEntry(copy)                        
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
                <div className="form-group" key={`entry--${entry.id}`}>
                    <label htmlFor="moodtag">Mood Tag</label><br></br>
                    <h6>Hold down [command] on Mac or [ctrl] on Windows to select multiple tags</h6>
                    <select  multiple={true}
                        onChange={
                            (evt) => {
                                    // create empty array to hold selected mood ids
                                let moodvalues = []                                    
                                const copy = {...entry}

                                    // for loop to push the selected mood id to
                                    // the array 
                                        // run it as many times as there are selections

                                    for (let i = 0; i < evt.target.options.length; i++) {                           
                                            if (evt.target.options[i].selected == true) {
                                            moodvalues.push(evt.target.options[i].value)
                                            }
                                    }
                                copy.moodtag = moodvalues
                                updateEntry(copy)                        
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
                <button onClick={addNewEntry} className="btn btn btn-dark">
                    Add Journal Entry
                </button>


                <button className="btn btn-primary"
                            onClick={() => {
                            history.push({ pathname: "/"})}}>
                    Cancel
                </button>
                                    <br></br><br></br><br></br>
                                    <hr className="rounded"></hr>
        </form>
        </>
    )
}

