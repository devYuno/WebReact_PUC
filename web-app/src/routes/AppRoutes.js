import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import Home from '../pages/Home/home';

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