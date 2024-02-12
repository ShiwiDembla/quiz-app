import React from 'react'

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
        <div className='grid'    >
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
