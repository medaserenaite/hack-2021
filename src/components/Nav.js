import React from 'react'
import './styles/Nav.scss'

export default function Nav() {

    const toggleNav = e => {
        let nav = document.querySelector(".Navigation__container")
        nav.classList.toggle("change")
    }

    return (
        <div className="Navigation" onClick={(e) => toggleNav(e)}>
            <div className="Navigation__container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    )
}