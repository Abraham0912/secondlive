import React from 'react'
import {Post} from './Post'
import './Main.css'
export const Main = () => {
    return (
        <div className="main">
            <h2>Main.js</h2>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
