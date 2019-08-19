import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
    
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <h5 className="movie__year">
                    {year}
                </h5>
                <ul>
                    {genres.map((genre, index)=>(
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summa">
                    {summary}
                </p>
            </div>
        </div>
        );

}

Movie.protoTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;