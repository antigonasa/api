import React from 'react'
import { Link } from 'react-router-dom'
import './navbar2.scss'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductsMenu from './ProductsMenu'
import SolutionsMenu from './SolutionsMenu'

const Navbar2 = () => {
    return (
        <div className='nav2'>
            <Link to='/' className='logo'></Link>
            <ul>
                <li>
                    <Link to='/services' className='nav-link'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/products' className='nav-link'>
                        Products <MdKeyboardArrowDown />
                    </Link>
                    <ProductsMenu />
                </li>
                <li>
                    <Link to='/about' className='nav-link'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/solutions' className='nav-link'>
                        Solutions <MdKeyboardArrowDown />
                    </Link>
                    <SolutionsMenu />
                </li>
            </ul>
            <div className="auth-buttons">
                <Link to="/login" className="shared-button">
                    Log In
                </Link>
                <Link to="/signup" className="shared-button">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default Navbar2