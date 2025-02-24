import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch();

    const handleRemoveMovie = (id) => {
        dispatch(removeMovie(id))
    }

    return (
        <div>
            {movies.map((movie) => 
                <>
                    <div key={movie.id}>
                        <div>{movie.title}</div>
                        <button onClick={() => handleRemoveMovie(movie.id)}>Remove movie</button>
                    </div>
                </>
            )} 
            
        </div>
    )
}