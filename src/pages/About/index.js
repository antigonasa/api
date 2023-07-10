import React, {lazy, Suspense} from 'react'
import Loader from '../../components/shared/Loader/Loader'

const LazyLoaded = lazy(() => import('./About'))

const About = () => {
  return (
    <Suspense fallback={<Loader />}>
        <LazyLoaded/>
    </Suspense>
  )
}

export default About