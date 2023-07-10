import React from 'react'
import MainComponent from '../../shared/MainComponent/MainComponent'
import img6 from '../../../assets/About/img6.jpg';
import { SiAboutdotme } from 'react-icons/si'

const AboutMainComponent = () => {
  return (
    <MainComponent 
        bg={img6}
        icon={<SiAboutdotme />}
        title='I am about page'
    />
  )
}

export default AboutMainComponent