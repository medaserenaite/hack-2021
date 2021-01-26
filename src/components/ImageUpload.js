import React, { useState } from 'react'
import { storage } from '../firebase'

export default function ImageUpload() {
    const [image, setImage] = useState(null);

    const handleChange = e => {
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
    }

    const handleUpload = () => {
    const uploadImage = storage.ref(`images/${image.name}`).put(image);
    uploadImage.on(
        "state_changed",
        snapshot => {}, //current progress of upload
        error => { console.log(error) },
        () => {
        storage.ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
            console.log(url)
        })
        }
    )
    }
    console.log("image: ", image)

    return (
        <div>
             {/* uploads an image to firebase */}
            <input required type="file" onChange={handleChange}/>
            {/* TODO: do not refresh on Upload-click if there is no file selected */}
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
