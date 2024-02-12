import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'

export default function Main() {
    const inputRef = useRef(null);
    const [input, setInput] = useState('');
  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz Application</h1>
        <ol>
            <li>
                You will be asked 10 questions one after another
            </li>
            <li>
                10 points is awarded 
            </li>
        </ol>
        <form id="form">
            <input type="text"
            name='input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            placeholder="Username"  
             />
            
        </form>
        <div className='start'>
            <Link className='btn' to="/quiz" >Start Quiz</Link>
        </div>
    </div>
  )
}
