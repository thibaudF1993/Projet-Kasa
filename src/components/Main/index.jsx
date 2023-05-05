import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Logement from "../../pages/Logement";
import ErrorPage from "../../pages/ErrorPage";

const Router = () => {
    return (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logement/:id" element={<Logement />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
    );
};

export default Router