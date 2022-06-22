/*
    The purpose of this component is to provide the 
    form to be used to create a new Technology Tag.
    This is called by route: "/techtagnewform"
*/

import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import logo from '../MyDJ-removebg.png'

export const TechtagNewForm = () => {
    const [ techtags, updateTechtag ] = useState({})
    const history = useHistory()

    const addNewTechTag = (evt) => {
        evt.preventDefault()            
        
        const newTechTag = {
            tech_title: techtags.tech_title
        }
        
        // TODO: move the below POST into TechTagsManager

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
            body: JSON.stringify(newTechTag)
        }
        return fetch("http://localhost:8000/techtags", fetchOption)
        .then(() => {
            history.push("/techtags")
        })
    }

    return (
        <>
            <hr className="rounded"></hr> 
                <img src={logo} className="App-logo" alt="logo" />
            <h1 className="newTechTagForm__title">Create New Technology Tag</h1>
                <hr className="rounded"></hr> 
            <form className="newTechTagForm">

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="techtag">Technology Tag:</label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...techtags}
                                    copy.tech_title = evt.target.value
                                    updateTechtag(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="New technology tag..."
                            />
                    </div>
                </fieldset>


            <br></br>
            <button onClick={addNewTechTag} className="btn btn btn-dark">
                Save New Tag
            </button>


            <button className="btn btn-primary"
                        onClick={() => {
                        history.push({ pathname: "/techtags"})}}>
                Cancel
            </button>

                <br></br>
                <br></br>
                <hr className="rounded"></hr>   
                <br></br>


        </form>

        
        </>
    )

}