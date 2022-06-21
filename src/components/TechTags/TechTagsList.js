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
                getTechtags()
                .then((techtagsArray) => {
                    setTechtags(techtagsArray)
                })
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
                <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Technology Tags Listing</h1>
                <hr className="rounded"></hr> 

                <button className="btn btn btn-dark" onClick={() => {
                            history.push(`TechtagNewForm`)                           
                            }}>Create a New Technology Tag</button> 
                <hr className="rounded"></hr>

            {
                techtags.map(
                    (techtag) => {
              
                        return <div className="techtag" key={`techtag--${techtag.id}`}>
                            <article className="techtagCard">                      
                                {techtag.tech_title}                                
                                
                                <button className="btn btn btn-dark" onClick={() => {
                                history.push(`techtagedit/${techtag.id}`)
                            }}>Edit Technology Tag</button> 

                            <button className="btn btn-outline-danger" onClick={() => {
                                deleteTechtag(techtag.id)                            
                            }}>Delete Technology Tag</button> <br></br>
                                
                            </article>
                        </div>                   
                        } 
                )       
            }
                <br></br>
                <hr className="rounded"></hr>   
                <br></br>  
        </>
    )
}
