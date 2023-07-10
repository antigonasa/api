import React from 'react'
import { solutionsData } from './data'
import { Link } from 'react-router-dom'

const SolutionsMenu = () => {
  return (
    <div className='megamenu solutions-megamenu'>
      
      <h6>Solutions</h6>
        <div className='menu-links'>
            {solutionsData.map((props) => {
                return(
                    <Link to={props.to} key={props.id} className='menu-link'>
                        <div className="icon">
                            {props.icon}
                        </div>
                        <p>{props.link}</p>
                    </Link>
                )
            })}
        </div>
      </div>
  )
}

export default SolutionsMenu