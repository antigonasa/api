import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner'
import Services from '../../components/pages/Home/Services'
import Navbar2 from '../../components/shared/Navbar2/Navbar2'
import SolutionsTabs from '../../components/pages/Home/SolutionsTabs'
import Footer from '../../components/shared/Footer/Footer'
import HomeMainComponent from '../../components/pages/Home/HomeMainComponent'
import Inline1 from '../../components/pages/Home/Inline1'
const Home = () => {
  return (
    <div className='page-container home-page'>
        {/* <Navbar /> */}
        <Navbar2 />
        <Banner />
        <Inline1 />
        <SolutionsTabs />
        <HomeMainComponent />
        <Services />
        <Footer />
    </div>
  )
}

export default Home