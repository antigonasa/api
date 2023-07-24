import React, { useEffect, useState } from 'react'
import './colorSwitch.scss'

const ColorSwitch = () => {
    const [mode1, setMode1] = useState(() => localStorage.getItem("mode1"))
    console.log('mode1', mode1);

    const setPreferedTheme1 = () =>{
        const _mode1 = localStorage.getItem('mode1');
        if(_mode1){
            setMode1(_mode1)
        } 
        else{
            setMode1('theme-orange')
        }
    }

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme1);
        return() => {
            window.removeEventListener("storage", setPreferedTheme1)
        }
    }, []);

    useEffect(() => {
        if(mode1 === "theme-orange"){
            document.body.classList.add("theme-orange");
            document.body.classList.remove("theme-red", "theme-blue", "theme-green");
            localStorage.setItem("mode1", "theme-orange")
        }
        else if(mode1 === "theme-red"){
            document.body.classList.add("theme-red");
            document.body.classList.remove("theme-orange", "theme-blue", "theme-green");
            localStorage.setItem("mode1", "theme-red")
        }
        else if(mode1 === "theme-blue"){
            document.body.classList.add("theme-blue");
            document.body.classList.remove("theme-orange", "theme-red", "theme-green");
            localStorage.setItem("mode1", "theme-blue")
        }
        else if(mode1 === "theme-green"){
            document.body.classList.add("theme-green");
            document.body.classList.remove("theme-orange", "theme-blue", "theme-red");
            localStorage.setItem("mode1", "theme-green")
        }
    }, [mode1])

  return (
    <div className='colors'>
        <div className='circle-container circle-container1' onClick={() => setMode1("theme-orange")}>
            <div className='circle circle1'></div>
        </div>

        <div className='circle-container circle-container2' onClick={() => setMode1("theme-red")}>
            <div className='circle circle2'></div>
        </div>

        <div className='circle-container circle-container3' onClick={() => setMode1("theme-blue")}>
            <div className='circle circle3'></div>
        </div>

        <div className='circle-container circle-container4' onClick={() => setMode1("theme-green")}>
            <div className='circle circle4'></div>
        </div>
    </div>
  )
}

export default ColorSwitch