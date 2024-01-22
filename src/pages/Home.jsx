import React from 'react'
import HomeNav from '../components/HomeNav';
import Featured from '../components/Featured';
import List from '../components/List';
import './Home.css'
import Footer from '../components/Footer';
const Home = ()=>{
    return (
        <>
            <div className="home">
                <HomeNav/>
                <Featured type="movie"/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;