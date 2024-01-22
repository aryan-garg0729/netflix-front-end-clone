import React, { useRef, useState } from 'react'
import '../style.css';
import Banner from '../components/Banner';
import Data from './BannerData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const emailInp = ()=>{
        setEmail(emailRef.current.value);
    }
    const passwordInp = ()=>{
        setpassword(passwordRef.current.value);
    }

    const navi = useNavigate("");
    const gotohome = ()=>{
        navi("/home");
    }
    return (
        <>
            <div className="box">
                <Navbar />
                <div className="mini-box">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="form-container">
                        {!email?<div className='form'>
                            <div className="form-element">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    ref={emailRef}
                                    // value={email}
                                    // onChange={emailInp}
                                />
                                <label className="floating-label" for="email">Email address</label>
                            </div>
                            <button className='bttn' onClick={emailInp}>Get Started</button>
                        </div>:<form className="form" action="post">
                            <div className="form-element">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    required 
                                    value={password}
                                    onChange={passwordInp}
                                    ref={passwordRef}
                                />
                                <label className="floating-label" for="password">Password</label>
                            </div>
                            <button type='' className='bttn' onClick={gotohome}>Start</button>
                        </form>}
                    </div>
                </div>
                </div>
            <div className="banners">
                {Data.map((val) => {
                    return <Banner heading={val.heading} para={val.para} vid={val.vid} />
                })}
                <Footer />
            </div>
        </>
    );
}

export default Signup;