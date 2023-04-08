import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg'

//f76603f1
const API_KEY = 'f76603f1'
const API_URL = 'http://www.omdbapi.com/?apikey=' + API_KEY

const movie = {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[]);


    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={()=>{}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default App;