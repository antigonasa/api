import React from 'react'
import './sharedLink.scss'
import { Link } from 'react-router-dom'

const SharedLink = (props) => {
    return (
        <Link to={props.to} className='shared-link'>
            <div className={props.reverse ? 'reverse' : ''}>
                {props.link} {props.icon}
            </div>
        </Link>
    )
}

export default SharedLink