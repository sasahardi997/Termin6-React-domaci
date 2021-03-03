import React from 'react';
import './index.css';

const Movie = (props) =>{
    return (
        <div>
            <div className="image">
                <img src={props.image} alt="movie-icon"/>
            </div>
            <div className="movie">
                {props.name},
                 sala: {props.sala},
                  cena: {props.cena}
            </div>
        </div>
    )
}

export default Movie;