import React from "react";

function MovieCard(props) {
    const movie = { borderRadius : 15 }
    return (
        <div className="movieCard">
            <iframe style={movie} width="100%" height={300} src={props.film.postURL} title={props.film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="box-description">
                <img className="logo" src={props.film.logoURL} />
                <div className="description">
                   <h4>{props.film.title}</h4>
                   <p> {props.film.description} </p>
                </div>               
            </div>
        </div>
    );
}

export default MovieCard;

