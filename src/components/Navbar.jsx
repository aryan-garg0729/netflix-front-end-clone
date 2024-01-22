import React, { useState } from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import globe from '../images/globe.svg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [lang,setLang]= useState("English");
    const changeLang = (e)=>{
        // setLang(e.target.value);
    }
    const navi = useNavigate();
    const toSignin = ()=>{
        navi('/signin')
    }
    return (
        <>
            <nav>
                <img src={logo} alt="" className='img-fluid logo' />
                <div className="btns">
                    <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                         {lang}
                        </a>
                        <ul className="dropdown-menu" >
                            <li  ><a className="dropdown-item" href="#">English</a></li>
                            <li ><a className="dropdown-item" href="#">Hindi</a></li>
                        </ul>
                    </div>
                    <button className='btn btn-danger' onClick={toSignin}>Sign In</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;