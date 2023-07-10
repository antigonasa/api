import React from 'react'
import './mainComponent.scss'

const MainComponent = (props) => {
  return (
    <div className='shared-main-component' style={{backgroundImage: `url(${props.bg})`}}>
        <h1>{props.title}</h1>
        <div className="icon">
            {props.icon}
        </div>
    </div>
  )
}

export default MainComponent