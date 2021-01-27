import React from 'react'
import Task from '../components/Task'

export default function Home() {
    return (
        <div>
            <h1>Home Screen</h1>
            <div className="Tasks-container">
              <Task />
              <Task />
              <Task />
            </div>
        </div>
    )
}
