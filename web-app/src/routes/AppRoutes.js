import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import Home from '../pages/Home/home';

class AppRoutes extends React.Component {
    render() {
        return (
            <HashRouter >
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </HashRouter>
        )
    }
}

export default AppRoutes;