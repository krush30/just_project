import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const Main = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies);

    if (movies === null) return;

    const mainMovie = movies[0];
    console.log(mainMovie);
    return (
        <div>
            <VideoBackground />
            <VideoTitle />
        </div>
    )
}

export default Main;
