import React, { useEffect, useState } from 'react'
import './modeSwitch.scss'

const ModeSwitch = () => {
    const [mode, setMode] = useState(() => localStorage.getItem('mode'));

    const preferedMode = () => {
        const _mode = localStorage.getItem("mode");
        if(_mode){
            setMode(_mode)
        }
        else(
            setMode('light')
        )
    }

    useEffect(() => {
        window.addEventListener('storage', preferedMode);
        return() => {
            window.removeEventListener('storage', preferedMode)
        }
    }, []);

    useEffect(() => {
        if(mode === 'dark'){
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark')
        }
        else{
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light')
        }
    }, [mode])

  return (
    <div className='light-dark-mode' onClick={() => setMode(mode => (mode === 'dark' ? 'light' : 'dark'))}>
        <div className='mode'></div>
    </div>
  )
}

export default ModeSwitch