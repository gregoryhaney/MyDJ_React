/*
    The purpose of this component is generate the HTML (JSX)
    that will list the journal entries created by ONLY the current user.
    Each journal entry will also provide a button for EDIT and DELETE.
    
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getEntriesWithDeveloper, terminateEntry } from "./JournalEntriesManager"
import { getDevelopers } from "../Developers/DevelopersManager"
import logo from '../MyDJ-removebg.png'

export const MyEntriesList = () => {
    const [ entries, setEntries ] = useState([])
    const [ developers, setDevelopers ] = useState([])
    const history = useHistory()


            const deleteEntry = (id) => {
                terminateEntry(id)
                history.push(`entries`)                
            }
                    
            
            // const deleteTechtag = (id) => {
            //     fetch(`http://localhost:8000/techtags/${id}`, {
            //         method: "DELETE",
            //         headers:{
            //             "Authorization": `Token ${localStorage.getItem("auth_token")}`
            //         }
            //     })
            //             getTechtags()
            //             .then((techtagsArray) => {
            //                 setTechtags(techtagsArray)
            //             })
            // }
        





            
            // call FNs to perform API fetch to get:
                // 1. entries from DB 
                // 2. all developers from DB
            useEffect(
                () => {
                getEntriesWithDeveloper()
                .then((entriesArray) => {
                    setEntries(entriesArray)
                })
                getDevelopers()
                .then((developersArray) => {
                    setDevelopers(developersArray)
                })
                },
            []
            )  
    
            // TODO: Limit this to ONLY show entries for current developer
                // remove hard-coded developer === x below
                // convert to check if entry's devID = current user's ID
            // in the backend, return 'request.auth.user.id' and use that here

                
    return (
        <>
            <h1>Listing of My Journal Entries</h1>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" />
            <hr className="rounded"></hr> 
            {
                
                entries.map(
                    (entry) => {                       
                    

                    if (entry.developer.id === 6){                                      
                    return <div className="entry" key={`entry--${entry.id}`}>
                    <article className="entryCard">                     
                        {entry.subject} by {entry.developer.nickname}.

                        <button className="button" onClick={() => {
                                history.push(`editentry/${entry.id}`)
                            }}>Edit Journal Entry</button> 

                            <button className="button" onClick={() => {
                                deleteEntry(entry.id)                            
                            }}>Delete Journal Entry</button>

                        </article>
                        </div>
                        } 
                    }                                
            )                      
        }         
        </>
    )          
}