import React, { useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav'

import Awards from './pages/Awards'

import GlobalContext from "./context/GlobalContext"

import { storage } from './firebase'


function InnerApp(){
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
    <div className="App">
      <Nav />
      <div className="contentContainer">   
        {/* Home screen (contains Tasks) */}
        <Route path="/home" component={Home} />
        <Route path="/awards" component={Awards} />
        
        {/* uploads an image to firebase */}
        <input required type="file" onChange={handleChange}/>
        {/* TODO: do not refresh on Upload-click if there is no file selected */}
        <button onClick={handleUpload}>Upload</button>

      </div>
    </div>
  );
}


export default function App() {

  return (
    <Router>
      <GlobalContext.Provider>
        <InnerApp />
      </GlobalContext.Provider>
    </Router>
  );
}