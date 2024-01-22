import React, { useState } from 'react'
import './HomeNav.css'
import logo from '../images/logo.png'
import N from '../images/N.svg'
const HomeNav = () => {
    const [scrolled, setScrolled] = useState(false);
    window.onscroll = () => {
        setScrolled(window.scrollY !== 0);
        return () => window.onscroll = null;
    }
    return (
        <>

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className={scrolled ? "navba scrolled" : "navba"}>
                    <div class="container">
                        <div className="left">
                            <a class="navbar-brand" href="#"><img src={window.screen.width>460?logo:N} alt="logo" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">TV Shows</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Movies</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">New & Popular</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">My List</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}




            <div className={scrolled?"navbar scrolled":"navbar"}>
                <div className="container">
                    <div className="left">
                        <img src={window.screen.width>460?logo:N} alt="logo" />
                        <a href="#">Home</a>
                        <a href="#">TV Shows</a>
                        <a href="#">Movies</a>
                        <a href="#">New</a>
                        {/* <a href="#">New & Popular</a> */}
                        {/* <a href="#">My List</a> */}
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNav;