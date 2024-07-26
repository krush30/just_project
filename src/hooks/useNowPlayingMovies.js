import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_Request } from "../utils/constans";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_Request);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])
}
export default useNowPlayingMovies;