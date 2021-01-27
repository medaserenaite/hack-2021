import React from 'react'
import ImageUpload from './ImageUpload'
import '../styles/Popup.scss'

export default function Popup() {
    return (
        <div className="Overlay">
            <div className="Popup">
                <h2>Popup</h2>
                <ImageUpload />
            </div>
        </div>
    )
}
