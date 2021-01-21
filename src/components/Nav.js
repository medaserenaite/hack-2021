import React, { useContext, useEffect } from "react";
import './styles/Nav.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Nav() {

    const toggleNav = e => {
        let nav = document.querySelector(".Navigation__container")
        nav.classList.toggle("change")
    }

    return (
        <div className="Navigation" onClick={(e) => toggleNav(e)}>
            <Link to="/home" className="Link">Home Screen</Link><br/>
            <Link to="/awards" className="Link">Awards Screen</Link>
            <div className="Navigation__container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    )
}