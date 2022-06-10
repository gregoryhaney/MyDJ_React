/*
    The purpose of this component is generate the HTML (JSX)
    that will list the technology tags.
    This is called by route: "/techtags"
*/

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getTechtags } from "./TechTagsManager"
import logo from '../MyDJ-removebg.png'

export const TechtagsList = () => {
    const [ techtags, setTechtags ] = useState([])
    const history = useHistory()


   // TODO: Move the below DELETE to TechTagsManager
   // TODO: add 'are you sure' alert window in return after delete button click

    const deleteTechtag = (id) => {
        fetch(`http://localhost:8000/techtags/${id}`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
        })
            .then(getTechtags())
    }


            
            // call the FN that get all techtags from DB via API Fetch
            useEffect(
                () => {
                getTechtags()
                .then((techtagsArray) => {
                    setTechtags(techtagsArray)
                })
                },
            []
            )   


        

    return (
        <>
                <h1>Technology Tags Listing</h1>
                <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
                <hr className="rounded"></hr> 

                <button className="button" onClick={() => {
                            history.push(`TechtagNewForm`)                           
                            }}>Create a New Technology Tag</button> <br></br>
                <hr className="rounded"></hr>

            {
                techtags.map(
                    (techtag) => {
              

                        return <div className="techtag" key={`techtag--${techtag.id}`}>
                            <article className="techtagCard">                      
                                <p>{techtag.tech_title}
                                
                                
                                <button className="button" onClick={() => {
                                history.push(`EditTechtag/${techtag.id}`)
                            }}>Edit Technology Tag</button> 

                            <button className="button" onClick={() => {
                                deleteTechtag(techtag.id)                            
                            }}>Delete Technology Tag</button> <br></br>

                                <br></br>
                                </p>
                            </article>
                        </div>                     
                        
                        } 
                )       
            }
        </>
    )
}
