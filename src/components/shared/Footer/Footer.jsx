import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { data } from './data'
import ModeSwitch from './ModeSwitch'
import ColorSwitch from './ColorSwitch'

const Footer = () => {
  return (
    <footer>
        <div className="logo-container">
            <Link to='/'></Link>
        </div>

        <div className='links'>
            {data.map(
                (props) => {
                    return(
                       <div className='category' key={props.id}>
                            <h6>{props.title}</h6>
                            <ul>
                                {props.links.map((li) => {
                                    return(
                                        <Link to={li.to}>{li.link}</Link>
                                    )
                                })}
                            </ul>
                       </div> 
                    )
                }
            )}
        </div>

        <div className='last-row'>
            <p>Outkos 2022 © All rights reserved.</p>
            
            <ModeSwitch />
        </div>

        <div className='prefered-theme'>
            Prefered theme: <ColorSwitch />
        </div>

    </footer>
  )
}

export default Footer