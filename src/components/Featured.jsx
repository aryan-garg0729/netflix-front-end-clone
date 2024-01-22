import React from 'react'
import featured from '../images/feature1.jpg'
import name from '../images/name.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Featured.css'
import { useNavigate } from 'react-router-dom';
const Featured = (props)=>{
    const redirect = useNavigate("");
    const play = ()=>{
      redirect("/watch");
    }
    return (
        <>
              <div className="featured">
                <img src={featured} alt="" className=''/>
                <div className="info">
                {props.type && (
                  <div className="category">
                    <span>{props.type==="movie"?"Movies":"Series"}</span>
                    <select name="genere" id="genere">
                      <option>Genere</option>
                    </select>
                  </div>
                )}
                  <img src={name} alt="" />
                  <h3>Wednesday</h3>
                  <span className='desc'>
                  Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.
                  </span>
                  <div className="buttons">
                    <button className='play' onClick={play}>
                      <PlayArrowIcon/>
                      <span>Play</span>
                    </button>
                    <button className='more'>
                      <InfoOutlinedIcon/>
                      <span>info</span>
                    </button>
                  </div>
                </div>
              </div>
        </>
    )
}

export default Featured;