/*
    The purpose of this component is to view a public entry's full
    details when a user clicks the entry from the list of public entries.
*/


import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getSingleEntry, getSingleEntryWithDeveloper } from "./JournalEntriesManager"
import logo from '../MyDJ-removebg.png'
import { useParams } from "react-router-dom"


export const SinglePublicEntryWithDetails = () => {
    const [ singleEntry, setEntry ] = useState([])
    const history = useHistory()
    const id = useParams()

    
    // TODO: in JSX, do lookup to display tag/mood titles instead of the ID
    //       and ensure it displays all mood/tag titles.
    
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
        <h1>Public Journal Entry</h1>
            
        <hr className="rounded"></hr> 
        <img src={logo} className="App-logo" alt="logo" />
        <hr className="rounded"></hr> 

            

                <div className="entry" key={`entry--${singleEntry.id}`}>
                    <article className="entryCard">                      
                        <p>DATE/TIME POSTED: {singleEntry.datetime}<br></br></p>
                        <p>DEVELOPER:        {singleEntry.developer?.first_name} {""}
                                             {singleEntry.developer?.last_name}, better known as {""}
                                             {singleEntry.developer?.nickname}<br></br></p>
                        <p>SUBJECT:          {singleEntry.subject}<br></br></p>                       
                        <p>ENTRY:            {singleEntry.body}<br></br></p>
                        
                        <p>TECHNOLOGY TAG:   {singleEntry?.techtag?.tech_title}<br></br></p>
                        <p>MOOD TAG:         {singleEntry?.moodtag?.tag_title}<br></br></p>     
                   
                    </article>
                    </div>                     
               
        </>
    )          
}