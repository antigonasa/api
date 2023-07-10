import React from 'react'
import MainComponent from '../../shared/MainComponent/MainComponent'
import img4 from '../../../assets/About/img4.jpg';
import {AiFillHome} from 'react-icons/ai'

const HomeMainComponent = () => {
  return (
    <MainComponent 
        bg={img4}
        title='Lorem Ipsum dolor sit amet...'
        icon={<AiFillHome />}
    />
  )
}

export default HomeMainComponent