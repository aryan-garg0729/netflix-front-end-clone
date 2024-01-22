import React from 'react'
import './Err404.css'
import logo from '../images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
const Err404 = () => {
    const navi = useNavigate();
    const toSignup = ()=>{
        navi('/')
    }
    return (
        <>
            <div className="err-box">
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <div className="text">
                    <h1>Lost your way?</h1>
                    <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                    <button onClick={toSignup}>Netflix Home</button>
                    <p className='code'>Error Code <strong>NSES-404</strong></p>
                </div>
            </div>
        </>
    )
}

export default Err404;