import React from 'react'
import InlineComponent from '../../shared/InlineComponent/InlineComponent'
import img1 from '../../../assets/About/img1.jpg'

const Inline1 = () => {
  return (
    <InlineComponent 
        title='Neque porro quisquam est'
        text='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        to='/login'
        link='Learn More'
        img={img1}
    />
  )
}

export default Inline1