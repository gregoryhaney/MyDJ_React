import React from "react"
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      {/* <Link to="/">Home</Link> */}

            <li className="navbar__item active">
              <Link className="nav__link" to="/">Home</Link>
            </li>

            <li className="navbar__item active">
              <Link className="nav__link" to="/developers">Developers List</Link>
            </li>

            <li className="navbar__item active">
              <Link className="nav__link" to="/entries">Journal Entries</Link>
            </li>

            <li className="navbar__item active">
              <Link className="nav__link" to="/moodtags">Mood Tags List</Link>
            </li>

            <li className="navbar__item active">
              <Link className="nav__link" to="/techtags">Technology Tags List</Link>
            </li>



      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
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
