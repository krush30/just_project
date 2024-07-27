import React from 'react'
import { useSelector } from 'react-redux';

const Secondary = () => {
    const movies = useSelector(store => store.movie)

    if (movies === null) return;
    const movieList = movies;

    console.log(movieList);
    return (
        <div>

        </div>
    )
}

export default Secondary;
