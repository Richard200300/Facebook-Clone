import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages

import Home from "./Home"
import SignIn from "./signIn"
import SignUp from "./sU"
import Gd from "./gd"

const Rout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<SignIn />} />
            </Routes>
            <Routes>
                <Route path="/group" element={<Gd />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<SignUp />} />
            </Routes>

        </Router>

    )
}

export default Rout;