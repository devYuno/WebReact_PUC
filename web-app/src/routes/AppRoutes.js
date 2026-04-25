import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/login.js';
import Register from '../pages/Register/register.js';
import Home from '../pages/Home/home.js';

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter basename='/WebReact_PUC'>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default AppRoutes;