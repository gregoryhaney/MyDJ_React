/*
    The purpose of this component is generate the HTML (JSX)
    that will provide a form to edit a tech tag.
    
*/

import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getSingleTechtag } from "../TechTags/TechTagsManager"
import logo from '../MyDJ-removebg.png'


export const TechEditForm = () => {
    const [ originalTech, setOriginalTech ] = useState([])
    const [ update, updatedTech ] = useState([])
    const history = useHistory()
    const id = useParams()


    useEffect(
        () => {
            getSingleTechtag(id).then(originalTech => setOriginalTech(originalTech))
        }, [])            
                
     
        // build the object that will be sent via API when form is submitted
            // use the preventDefault FN to prevent default browser behavior
            // after the form is submitted
        const updateTheTech = (evt) => {
            evt.preventDefault()            

                const updatedTech = {
                    tech_title: update.tech_title
                }
        
            const fetchOption = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("auth_token")}`
                },
                body: JSON.stringify(updatedTech)
            }
            return fetch(`http://localhost:8000/techtags/${id.id}`, fetchOption)
                .then(() => {
                    history.push("/techtags")
                })
        }
        

    return (
        <>
            <hr className="rounded"></hr> 
            <img src={logo} className="App-logo" alt="logo" />
                <hr className="rounded"></hr>
            <form className="editTechForm">
            <h2 className="editTechForm__title">Edit a Tech Tag</h2>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="techtag">Tech Tag:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...update}
                                    copy.tech_title = evt.target.value
                                    updatedTech(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={originalTech.tech_title}
                            />
                    </div>
                </fieldset>



            <br></br>
            <button onClick={updateTheTech} className="btn btn-primary">
                Save Changes
            </button>

            <button className="btn btn-primary"
                    onClick={() => {
                        history.push({ pathname: '/techtags'})
                    }}
            >Cancel</button>

        </form>
        </>
    )
}