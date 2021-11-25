import React, {useState, useEffect} from 'react'
import {Post} from './Post'
import TextField from '@mui/material/TextField';
import './Main.css'
export const Main = () => {
    const [input, setInput] = useState({
        title:"",
        conten:""
    })

    const [post,setPost] = useState([])

    const handleButton = ()=>{
        console.log(input)
    }

    const handleButton2 = ()=>{
        console.log(post)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(input.title && input.conten){
            setPost([input, ...post])
            setInput({
                title:"",
                conten:""
            })
        }
        else{
            alert("Complet title and content")
        }
        // alert("Se hizo submit")
        
    }

    // useEffect(() => {
        
    // }, [post])
    return (
        <div className="main">
            <button onClick={handleButton}>ver input</button>
            <button onClick={handleButton2}>ver post</button>
            <div className="main__input">
            <form noValidate autoComplete="off">
                <div className="main__inputForm">
                    <TextField 
                        id="standard-basic" 
                        label="Title" 
                        variant="standard" 
                        value={input.title} 
                        onChange={ e => setInput({...input,title:e.target.value})}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Enter your post ..." 
                        variant="outlined" 
                        value={input.conten} 
                        onChange={ e => setInput({...input,conten:e.target.value})} 
                        className="main__inputFormText"
                    />
                </div>
                <button onClick={handleSubmit} type="submit"></button>
            </form>
            </div>
            <div className="main__post">
                {post.map(({title,conten})=><Post title={title} content={conten}/> )}
            </div>

        </div>
    )
}
