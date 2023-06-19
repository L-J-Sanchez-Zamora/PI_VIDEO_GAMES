import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import getplatforms from '../../actions/getplatforms'
import getgenres from '../../actions/getgenres';
import getvgames from "../../actions/getvideogames";
import sortvgames from "../../actions/sortvgames";
import stl from './LandingPage.module.css'

export default function LandingPage() {
   const dispatch = useDispatch();

 //Get Platforms from API  
   useEffect (() => {
      dispatch(getplatforms()); 
  },[dispatch])

  //Get Genres from API
   useEffect (() => {
      dispatch(getgenres()); 
   },[dispatch])

   useEffect (() => {
      dispatch(getvgames()); 
   },[dispatch])
   
   function handleSortvgames(e) {
      dispatch(sortvgames('asc'))
  }

    return (
      <center>
       <div className={stl.lpcontainer}> 
       <h1>Gamer World Project</h1><br/>
       <h2>Discover a universe full of excitement and endless possibilities in the world of video games! Immerse yourself in an exhilarating experience where challenges await around every corner and the satisfaction of victory propels you forward. Our platform invites you to explore a wide collection of captivating games that will transport you on unforgettable adventures. Whether you are an experienced gamer or just starting your journey into the world of gaming, get ready to unleash your skills and embark on an epic gaming journey. Join us right now and let yourself be carried away by the thrill of adventure. The next level awaits you!</h2>
          < Link to = '/home'> 
          <button className={stl.but} onClick={handleSortvgames}>Welcome</button>
          </Link>
          
       </div>
       </center>
    )   
}