/*
    The purpose of this component is generate the HTML (JSX)
    that will list the journal entries.
    This is called by route: "/entries"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getEntries } from "./JournalEntriesManager"
import { getDevelopers } from "../Developers/DevelopersManager"
import logo from '../MyDJ-removebg.png'

export const EntriesList = () => {
    const [ entries, setEntries ] = useState([])
    const [ developers, setDevelopers ] = useState([])
    const history = useHistory()


            
            // call FNs to perform API fetch to get:
                // 1. all entries from DB
                // 2. all developers from DB
            useEffect(
                () => {
                getEntries()
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
    
    return (
        <>
        <h1>All Public Journal Entries Listing</h1>
        <hr className="rounded"></hr> 
        <img src={logo} className="App-logo" alt="logo" />
        <hr className="rounded"></hr> 
        {
            entries.map(
                (entry) => {
                    if (entry.is_public === true){                                      
                    return <div className="entry" key={`entry--${entry.id}`}>
                    <article className="entryCard">                      
                    {entry.subject}

                            {
                                developers.map(
                                    (developer) => {
                                    if (entry.developer.id === developer.id) {
                                    return <div className="developer" key={`developer--${developer.id}`}>
                                        <article className="developerCard">
                                           by {developer.nickname}.
                                        </article>
                                        </div>
                                    } 
                                    }                                  
                                )
                            }
                               
                    </article>
                    </div>                     
                        } 
                    }
            )                                         
        }
        </>
    )          
}