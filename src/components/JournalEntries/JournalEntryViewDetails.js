/*
    The purpose of this component is to view a public entry's full
    details when a user clicks the entry from the list of public entries.
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getSingleEntry } from "./JournalEntriesManager"
import logo from '../MyDJ-removebg.png'
import { useParams } from "react-router-dom"


export const SinglePublicEntryWithDetails = () => {
    const [ singleEntry, setEntry ] = useState([])
    const history = useHistory()
    const id = useParams()

    
            // call FN to perform API fetch to get:
                // the single entry and associated developer from DB
           
            useEffect(
                () => {
                getSingleEntry(id)
                .then((entryArray) => {
                    setEntry(entryArray)                
                })
                
                },
                []
            )         
                

    return (
        <>
            
        <hr className="rounded"></hr> 
        <img src={logo} className="App-logo" alt="logo" />
        <hr className="rounded"></hr>             
        <h1>Public Journal Entry</h1>

                <div className="entry" key={`entry--${singleEntry.id}`}>
                    <article className="entryCard">                      
                        <p><u>DATE/TIME POSTED:</u> 
                            <br></br>{singleEntry.datetime}<br></br></p>
                        <p><u>DEVELOPER:</u>        
                            <br></br>{singleEntry.developer?.first_name} {' '}
                                     {singleEntry.developer?.last_name}, who is better known as {' '}
                                     {singleEntry.developer?.nickname}<br></br></p>
                        <p><u>SUBJECT:</u>          
                            <br></br>{singleEntry.subject}<br></br></p>                       
                        <p><u>ENTRY:</u>            
                            <br></br>{singleEntry.body}<br></br></p>                   
                        <p><u>TECHNOLOGY TAG(s):</u>   
                            <br></br>{singleEntry?.techtag?.map(
                                                (tech_title) => {
                                                return tech_title.tech_title 
                                                })}</p>
                        <p><u>MOOD TAG(s):</u>         
                            <br></br>{singleEntry?.moodtag?.map(   
                                                (tag_title) => {
                                                return tag_title.tag_title
                                                },)}</p>                 

                    </article>
                </div>                     
               
        </>
    )          
}