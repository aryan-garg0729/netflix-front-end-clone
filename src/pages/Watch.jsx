import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import trailer from '../images/wednesday.mp4'
import './Watch.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const Watch =()=>{
    const navigate = useNavigate("")
    const goback = ()=>{
        navigate(-1)
    }
    return (
        <>
            <div className="watch">
                <Button className="back" onClick={goback}>
                    <ArrowBackOutlinedIcon/>
                    Home
                </Button>
                <video src={trailer} className="video" autoPlay muted progress controls ></video>
            </div>
        </>
    )
}
export default Watch;