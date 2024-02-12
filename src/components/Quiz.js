import React from 'react'
import Questions from './Questions'

export default function Quiz() {
    const onNext = () =>{
        console.log('next')
    }
    const onPrev = () =>{
        console.log('prev')
    }
  return (
    <div className='container'>
       <h1 className='title text-light'> Quiz </h1>
       <Questions/>
        <div className='grid'    >
       
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
