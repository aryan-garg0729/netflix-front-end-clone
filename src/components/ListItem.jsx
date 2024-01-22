import React, { useState } from 'react'
import'./ListItem.css'
import thumbnail from '../images/feature1.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import trailer from '../images/wednesday.mp4'
import { useNavigate } from 'react-router-dom';
const ListItem = (props)=>{
    const [isHovered,setisHovered] = useState(false);
    const redirect = useNavigate("");
    const play = ()=>{
      redirect("/watch");
    }
    return (
        <>
            <div className="listItem"
                 onMouseEnter={()=>setisHovered(true)}
                 onMouseLeave={()=>setisHovered(false)}
                 onClick={play}
            >
                {isHovered&&<video src={trailer} autoPlay muted loop></video>}
                <img src={thumbnail} alt="" />
                <div className="iteminfo">
                    <div className="icons">
                        <PlayArrowIcon className='icon'/>
                        <AddIcon className='icon'/>
                        <ThumbUpOutlinedIcon className='icon'/>
                        <ThumbDownOffAltOutlinedIcon className='icon'/>
                    </div>
                    <div className="iteminfotop">
                        <span>1 hr 39 min | </span>
                        <span className='limit'>+18 | </span>
                        <span>2023</span>
                    </div>
                    {/* <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore, ex officia ipsum sapiente rem distinctio mollitia ipsam consequuntur, voluptates deleniti vero aut repudiandae dolorum neque pariatur, possimus eos quae.
                    </div> */}
                    <div className="genre">Action</div>
                </div>
            </div>
        </>
    )
}
export default ListItem;