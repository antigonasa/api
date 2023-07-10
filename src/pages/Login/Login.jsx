import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Form from '../../components/pages/Login/Form'

const Login = () => {
  return (
    <div className='page-container login-page'>
        <Navbar />
        <Form />
    </div>
  )
}

export default Login