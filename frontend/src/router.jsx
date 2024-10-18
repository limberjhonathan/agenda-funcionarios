// import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListEmployee from './pages/ListEmployee';

const AppRoutes  = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component= { ListEmployee } path='/list' exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes ;