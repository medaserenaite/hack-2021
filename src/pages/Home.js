// Page a user sees when logged in
import React from 'react'
import Task from '../components/Task'

export default function Home() {
    return (
        <div>
            {/* conditional depending on the context  */}
            <h1>Home Screen</h1>
            <div className="Tasks-container">
              <Task />
              {/* <Task />
              <Task /> */}
            </div>
        </div>
    )
}
