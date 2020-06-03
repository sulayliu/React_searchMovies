import React from 'react';

export default function Movie(props) {
  return (
      <div className="movie">
        <img
          src={props.movie.poster_path === null ? "image-not-available.jpg" : 'https://image.tmdb.org/t/p/w500' + props.movie.poster_path}
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{props.movie.title}</div>
          <div className="rating">{props.movie.vote_average}/10</div>
          <div className="plot">
            {props.movie.overview}
          </div>
          <div data-toggled={props.heartList.includes(props.movie.id) ? "true" : "false"} 
            onClick={() => props.toggleHeart(props.movie.id)}
            className="listToggle">
            <div>
              <i className="far fa-heart"></i><i className="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
  )
}