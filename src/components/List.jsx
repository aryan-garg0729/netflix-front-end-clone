import React, { useRef } from 'react'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './List.css'
import ListItem from './ListItem';
const List = ()=>{

    const listRef = useRef();

    const handleClick = (direction)=>{
        let distance = listRef.current.getBoundingClientRect().x; 
        let right = listRef.current.getBoundingClientRect().right; 
        let swidth = window.screen.width;
        console.log(listRef.current.getBoundingClientRect());
        if(direction==="left" && distance<0){
            const t = swidth+distance;
            const tr = (-1*distance>t)?t:20;
            listRef.current.style.transform = `translateX(${tr}px)`
            console.log(distance);
        }
        if(direction==="right" && right>swidth){
            const t = -swidth+distance;
            const tr = (right-swidth>swidth)?t:(swidth-right+distance-40);
            listRef.current.style.transform = `translateX(${tr}px)`
            console.log(distance);
        }
    }

    return (
        <>
        <div className="list">
            <span className='listTitle'>Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosSharpIcon className='sliderArrow left'  onClick={()=>{handleClick("left")}}/>
                    <div className="items" ref = {listRef}>
                        <ListItem index={1}/>
                        <ListItem index={2}/>
                        <ListItem index={3}/>
                        <ListItem index={4}/>
                        <ListItem index={5}/>
                        <ListItem index={6}/>
                        <ListItem index={7}/>
                        <ListItem index={8}/>
                        <ListItem index={9}/>
                        <ListItem index={10}/>
                        {/* <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/>
                        <ListItem/> */}
                    </div>
                <ArrowForwardIosSharpIcon className='sliderArrow right' onClick={()=>{handleClick("right")}}/>
            </div>
        </div>
        </>
    )
}
export default List;