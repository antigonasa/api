import React from 'react'
import { Link } from 'react-router-dom'
import './InlineComponent.scss'
import {BsArrowRight} from 'react-icons/bs'

const InlineComponent = (props) => {
    return (
        <div className='shared-inline-component'>
            <div className='text'>
                {props.title ? <h1>{props.title}</h1> : null}
                {props.text ? <p>{props.text}</p> : null}
                {props.to ? <Link to={props.to}>{props.link} <BsArrowRight /></Link> : null}
            </div>

            {props.img ? <div className="img" style={{content: `url(${props.img})`}}></div> : null}
        </div>
    )
}

export default InlineComponent