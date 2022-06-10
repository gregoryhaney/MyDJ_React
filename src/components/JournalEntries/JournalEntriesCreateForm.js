/*
    The purpose of this component is generate the HTML (JSX)
    that will provide a form to create a journal entry.
    This is called by route: "/entrynewform"
*/


import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Datetime from 'react-datetime'
import logo from '../MyDJ-removebg.png'

export const EntryCreateForm = () => {
    const [ developers, setDevelopers ] = useState([])
    const [ entry, updateEntry ] = useState([])
    const [ moodtags, setMoodtags ] = useState([])
    const [ techtags, setTechtags ] = useState([])
    const history = useHistory()




    // TODO: get current user and set the first useEffect
    // to retrieve ONLY that single user



    

    useEffect(
        () => {
            fetch("http://localhost:8000/developers", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }})
            .then(res => res.json())
            .then((developersArray) => {
                setDevelopers(developersArray)
            })
        },
        []
    )


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
                    datetime: Date().toLocaleString(),
                    subject: entry.subject,
                    body: entry.body,
                    is_public: "",
                    techtag: entry.techtag,
                    moodtag: entry.moodtag,
                    developer: developers
                }
        
            const fetchOption = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            }
            return fetch("http://localhost:8080/entries", fetchOption)
                .then(() => {
                    history.push("/entries")
                })
            }
        

    return (
        <>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" />
                <hr className="rounded"></hr>
            <form className="newEntryForm">
            <h2 className="newEntryForm__title">Add New Journal Entry</h2>

                <fieldset>
                    {/* <div className="form-group" key={`property--${property.id}`}> */}
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
                    {/* </div> */}
                </fieldset>



                <fieldset>
                    <div className="form-group">
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
                <div className="form-group">
                    <label htmlFor="isPublic">Public or Private?</label><br></br>
                    <select defaultValue={'0'}
                        onChange={
                            (evt) => {
                                const copy = {...entry}
                                copy.is_public = evt.target.value
                                updateEntry(copy)
                    }}>
                        <option value="0">It is...</option>
                        <option value="true">Public</option>
                        <option value="false">Private</option>
                           
                    </select>
                </div>
                </fieldset>



            <fieldset>
                <div className="form-group">
                    <label htmlFor="techtag">Technology Tag:</label><br></br>
                    <select defaultValue={'0'}
                        onChange={
                            (evt) => {
                                const copy = {...entry}
                                copy.techtag = evt.target.value
                                updateEntry(copy)
                    }}>
                        <option value="0">Select the technology tag...</option>
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
                    <select defaultValue={'0'}
                        onChange={
                            (evt) => {
                                const copy = {...entry}
                                copy.moodtag = evt.target.value
                                updateEntry(copy)
                    }}>
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
            <button onClick={addNewEntry} className="btn btn-primary">
                Add Journal Entry
            </button>
        </form>
        </>
    )

}


/*
<fieldset>
                <div className="form-group">
                    <label htmlFor="occupied">Occupied?</label>
                    <input 
                        onChange={
                            (evt) => {
                                const copy = {...property}
                                copy.occupied = evt.target.checked
                                updateProperty(copy)
                            }
                        } 
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        placeholder="Occupied?"
                        />
                </div>
            </fieldset>

*/