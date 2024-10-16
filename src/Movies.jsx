import React, { useEffect, useState } from 'react';
import { moviesData } from './Data/Data';

export default function Movies() {
    let [storeMovieData, setStoredMovieData] = useState([]);
    let [originalMovieData,setOriginalMovieDara] = useState([]);

    useEffect(() => {
        getAllMoviesData();
    },[])

    function getAllMoviesData() {
        setStoredMovieData(moviesData);
        setOriginalMovieDara(moviesData);
    }

    let movieList  = storeMovieData.map((item,i) => {
        console.log(item);
        
        return (
            <div key={i} className='card'>
                <h3>{item.title}</h3>
                <img src={item.poster_path} alt="not found" className='image-style'></img>
            </div>
        )
    })

    let filterMovies = (value) => {
        let sortedMovieData = originalMovieData.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()));
        setStoredMovieData(sortedMovieData);
    }

  return (
    <>
        <h2>Movies Zone</h2>
        <div className='button-container'>
            <button onClick={getAllMoviesData}>All</button>
            <button onClick={() => filterMovies('Action')}>Action</button>
            <button onClick={() => filterMovies('Thriller')}>Thriller</button>
            <button onClick={() => filterMovies('Animation')}>Animation</button>
            <button onClick={() => filterMovies('Horror')}>Horror</button>
            <button onClick={() => filterMovies('Drama')}>Drama</button>
            <button onClick={() => filterMovies('Sci-Fi')}>Sci-Fi</button>
        </div>

        <div className='card-container'>
            {movieList}
        </div>
    </>
  )
}
