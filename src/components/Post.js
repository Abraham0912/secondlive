import React from 'react'
import './Post.css'
export const Post = ({title,content}) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
