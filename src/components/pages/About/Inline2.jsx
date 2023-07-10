import React from 'react'
import InlineComponent from '../../shared/InlineComponent/InlineComponent'
import img5 from '../../../assets/About/img5.jpg'

const Inline2 = () => {
  return (
    <InlineComponent 
        title='Title 2'
        text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        img={img5}
    />
  )
}

export default Inline2