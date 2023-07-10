import React from 'react'
import { productsData } from './data'
import { Link } from 'react-router-dom'

const ProductsMenu = () => {
  return (
    <div className='megamenu products-megamenu'>
        <h6>Products</h6>
        <div className='menu-links'>
            {productsData.map((props) => {
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

export default ProductsMenu