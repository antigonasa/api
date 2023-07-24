import React from 'react'
import './styles/SvgUse.scss'
import {ReactComponent as Services1} from '../../../assets/shared/services1.svg'
import {ReactComponent as Services2} from '../../../assets/shared/services2.svg'

const SvgUse = () => {
  return (
    <div className='svg-use'>
        <h1>Svg Use</h1>
        <div className="icons">
            <Services1 />
            <Services2 />
        </div>
    </div>
  )
}

export default SvgUse