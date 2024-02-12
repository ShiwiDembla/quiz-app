import React from 'react'

export default function Questions() {

    const onSelect = (e) =>{
        console.log(e.target.value)
        setValue (e.target.value)
    }

    const [value, setValue] = React.useState(null)
    const questions  = [ {
        value: 'Paris',
        id: 'q1-option1'
    }
    , {
        value: 'Berlin',
        id: 'q1-option2'
    }
    , {
        value: 'Germany',
        id: 'q1-option3'
    }
    
]

  return (
    <div className='questions'>
        <h2 className='text-light'> Question 1  {value} </h2>
        <p className='text-light'>What is the capital of France?</p>
        

        <ul>
            {
                questions.map((q, index) => {
                    return (
                        <li key={index}>
                            <input 
                            id={q.id} 
                            value={q.value}
                            onChange={onSelect}
                            checked={value === q.value}
                            type='radio' name='answer'  />
                            <label className='text-primary' htmlFor={q.id}>{q.value}</label>
                            <div className='check' > </div>
                        </li>
                    )
                })
            }
            </ul>
    </div>
  )
}
