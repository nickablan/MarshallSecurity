import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Home from "./components/Home/home"
import Login from "./components/Users/login"
import Register from "./components/Users/register";
import Admin from "./components/Admin/admin"
import Layout from "./components/Layout/layout"

import "./App.scss"

const App = () => {
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/login" element ={<Login />}/>
                      <Route path="/register" element={<Register />}/>
                      <Route path="/admin" element={<Admin />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;
