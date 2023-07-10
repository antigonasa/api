import React, {lazy, Suspense} from 'react'
import Loader from '../../components/shared/Loader/Loader'

const LazyLoaded = lazy(() => import('./Login'))

const Login = () => {
  return (
    <Suspense fallback={<Loader />}>
        <LazyLoaded/>
    </Suspense>
  )
}

export default Login