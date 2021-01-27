import React from 'react'
import '../styles/Form.scss'

export default function Form() {
    return (
        <div className="Form">
            <div className="Form__container">
            <form>
                <label>Name</label><br/>
                <input type="name" /><br/>
                <label>Password</label><br/>
                <input type="password" /><br/><br/>
                <button className="Form__button">OK</button>
            </form>
            </div>
        </div>
    )
}
