import React, { useState } from 'react'
import './styles/inputs.scss'

const Inputs = () => {
    const [fullname, setFullname] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([
        {
            fullname:'Sam Bell',
            city:'London'
        },
        {
            fullname:'Betsy Smith',
            city:'Washington D.C.'
        },
    ]);

    const saveUser = () => {
        if(!fullname || !city){
            setError('Please fill in all fields');
            return
        }
        
        const newUser = {
            fullname:fullname,
            city:city
        }

        setUsers([...users, newUser]);
        setFullname('');
        setCity('');
        setError('');
    }

  return (
    <div className='inputs-component'>
        <div className='input-container'>
            <input 
                type='text' 
                placeholder='Full name' 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
            />
        </div>

        <div className='input-container'>
            <input 
                type='text' 
                placeholder='City' 
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
        </div>
        <div className='input-container'>
            <button onClick={saveUser}>Save</button>
        </div>
        <br />
            {error ? <p>{error}</p> : null}
         <br />
        <div className='users'>
            {users.map((props, i) => {
                return(
                    <div key={i}>
                        <h5>Fullname: {props.fullname}</h5>
                        <h6>City: {props.city}</h6>
                        <br />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Inputs