import { lazy, Suspense, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Loader from './components/shared/Loader/Loader';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Login = lazy(() => import('./pages/Login/Login'))

function App() {

   useEffect(() => {
    Aos.init({
      duration:1250,
      once: true
    })
  }, [])

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
