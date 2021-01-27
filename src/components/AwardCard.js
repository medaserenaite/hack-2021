import React from 'react'
import trees from '../trees.svg'
import '../styles/AwardCard.scss'

export default function AwardCard() {
    return (
        <div className="Task">
            
            <div className="Task__container">
            {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <img src={trees} className="Task__icon"/>
                <h2>Lorem Ipsum</h2>
                <p>Ragdoll sphynx. Himalayan bengal yet balinese</p>
            </div>
            <button className="Task__button">Ipsum Lorem</button>
        </div>
    )
}
