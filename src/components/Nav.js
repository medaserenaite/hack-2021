import React from "react";
import './styles/Nav.scss'
import { BrowserRouter as Link } from 'react-router-dom';

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
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}