import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
  const history = useHistory()
 
  return (
        <nav className="navBar">
                <ul className="menuNav">

                        <li className="navbar__item active">
                          <Link className="nav__link" to="/">Home</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/entries">Journal Entries</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/myentrieslist">My Journal Entries</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/entrynewform">Create a New Journal Entry</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/moodtags">Mood Tags List</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/moodtagnewform">Create a New Mood Tag</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/techtags">Technology Tags List</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/techtagnewform">Create a New Technology Tag</Link>
                        </li>

                        <li className="navbar__item">
                          <Link className="nav__link" to="/developers">Developers List</Link>
                        </li>


                </ul>  


                  {
                    localStorage.getItem("auth_token") !== null ?
                      <button className="btn btn-warning" onClick={() => {
                        localStorage.removeItem("auth_token")
                        history.push({ pathname: "/" })
                      }}>
                        Logout
                      </button>
                      :
                      <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                      </>
                  }
               
        </nav>
  )
}
