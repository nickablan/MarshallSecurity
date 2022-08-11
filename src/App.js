import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Home from "./components/Home/home"
import Login from "./components/Login/login"
import Register from "./components/Login/register";
import Admin from "./components/Admin/admin"
import Layout from "./components/Layout/layout"

import "./App.css";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} />
                    <Route path='/nickablan/MarshallSecurit/' element={<Layout />} />
                    <Route exact path="/nickablan/MarshallSecurit" element={<Home />} />
                    <Route path="/login" element ={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/admin" element={<Admin />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;
