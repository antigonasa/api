import React from 'react'

const Input = (props) => {
  return (
    <div>
        <p>{props.title}</p>
        <div className='input-container'>
            <div className="icon">{props.icon}</div>
            <input type={props.type} name={props.name} />
        </div>
    </div>
  )
}

export default Input