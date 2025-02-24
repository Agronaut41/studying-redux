import { useState } from "react"
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInputs = () => {
    const [newMovie, setNewMovie] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if(newMovie) {
            dispatch(addMovie(newMovie))
            setNewMovie("");
        }
    }

    return (    
        <div>
            <input type="text" placeholder="Title" onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
            <button type="button" onClick={handleAddMovie}>Add Movie</button>
        </div>
    )
}