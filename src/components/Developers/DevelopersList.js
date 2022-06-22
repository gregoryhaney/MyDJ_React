/*
    The purpose of this component is generate the HTML (JSX)
    that will list the developers.
    This is called by route: "/developers"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getDevelopers } from "./DevelopersManager"
import logo from '../MyDJ-removebg.png'

export const DevelopersList = () => {
    const [ developers, setDevelopers ] = useState([])
    const history = useHistory()

            
            // call the FN that gets all developers from DB via API Fetch
            useEffect(
                () => {
                getDevelopers()
                .then((developersArray) => {
                    setDevelopers(developersArray)
                })
                },
            []
            )   

    return (
        <>
                <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Developers Listing</h1>
                <hr className="rounded"></hr> 
            {
                developers.map(
                    (developer) => {
                        return <div className="developer" key={`developer--${developer.id}`}>
                            <article className="developerCard">                      
                                <p>{developer.first_name} {developer.last_name}, who is also known as {developer.nickname}<br></br>
                                </p>
                                <hr className="rounded2"></hr>
                            </article>
                        </div>                
                    } 
                )       
            }
                <br></br>
                <br></br>
                <hr className="rounded"></hr>   
                <br></br>
        </>
    )
}
