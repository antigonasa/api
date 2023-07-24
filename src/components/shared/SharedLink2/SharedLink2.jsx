import React from 'react'
import { Link } from 'react-router-dom'
import './sharedLink2.scss'

const SharedLink2 = (props) => {
    return (
        <Link to={props.to} className='shared-link2'>
            {props.text}
            <div className="icon">
                {props.icon}
            </div>
        </Link>
    )
}

export default SharedLink2