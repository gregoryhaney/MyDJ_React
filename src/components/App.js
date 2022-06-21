import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const App = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return <>
                            <div className="main__content">
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                            </div>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
