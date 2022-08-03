import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "./Home/home"
import Login from "./Login/login"
import Admin from "./Admin/admin"

const App = () => {
    


    return(
        <div>
            <header>
                {/* might add a navbar here later */}
            </header>
            <main>
                <Router>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </Router>
            </main>
        </div>
    )
}
