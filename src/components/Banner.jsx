import React from 'react'
import './banner.css'
const Banner=(props)=>{
    return (
        <>
            <div className="banner">
                <div className="divider"></div>
                <div className='content'>
                    <div className="left">
                        <h1>{props.heading}</h1>
                        <p>{props.para}</p>
                    </div>
                    <div className="right">
                        <figure>
                            <video src={props.vid} autoPlay muted loop></video>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  Banner;