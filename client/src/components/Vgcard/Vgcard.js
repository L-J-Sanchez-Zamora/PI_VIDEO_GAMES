import React from 'react';
import stl from './Vgcard.module.css'

export default function Vgcard({name, image, genres,rating}) {
    var genre = genres.split(',') 
    if (genre.length>2) {genre = genre.slice(0,7)}
   // if (genre.length === 1) {
   genre = genre.toString()
   // } else {
   // genre = genre.toString() + " (...)"//
    //}   

    return (

        <div className={stl.container}>
            <div className={stl.card}>
              
              <img className={stl.imag} src={image} alt ='Image Not Found' />
              <h4>{name}</h4>
              <p>{genre}</p>
              <br/>
              <span>{rating}</span>
           </div>
        </div>   
    )
}
