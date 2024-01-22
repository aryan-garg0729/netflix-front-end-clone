import React, { useState } from 'react'
import Footer from '../components/Footer';
import logo from '../images/logo.png'
import './Signin.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [hidden,setHidden] = useState({visibility:'hidden'});
    const [hide,setHide] = useState({visibility:''});
    const show = ()=>{
        setHidden({visibility:''})
        setHide({visibility:'hidden'});
    }

    const navi = useNavigate("");
    const gotohome = ()=>{
        navi("/home");
    }
    return (
        <>
            <div className="signin-box">
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <div className="signin form-container">
                    <h2>Sign In</h2>
                    <form action="post">
                        <div className="form-element">
                            <input type="text" name="email" id="email" required />
                            <label className="floating-label" for="email">Email or phone number</label>
                        </div>
                        <div className="form-element">
                            <input type="password" name="password" id="password" required />
                            <label className="floating-label" for="password">Password</label>
                        </div>
                        <button type='' className='bttn' onClick={gotohome}>Sign In</button>
                        <div className="form-check">
                            <div>
                                <input className="form-check-input" type="checkbox" defaultChecked value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <NavLink to="/forgotpassword">Need help?</NavLink>
                        </div>
                    </form>
                    <div className="end">
                        <div className="signup">
                            <p>New to Netflix?</p>
                            <NavLink to="/">Sign up now</NavLink>
                        </div>

                        <div class="more">
                            <p>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <button style={hide} onClick={show}>Learn more.</button>
                            </p>
                            <p style={hidden}>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                        </div>
                    </div>

                </div>
                {/* </div> */}
            </div>
            <Footer />
        </>
    )
}
export default Signin;