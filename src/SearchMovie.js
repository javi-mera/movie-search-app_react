import React, {useState} from "react";
import CardContent from './CardContent'

function SearchMovie() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
        
        console.log(query);
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=dd2309e130062f6cf74b2f6a4965ef84&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results)
            console.log(movies);
        }catch(err){
            console.log(err)
        }
    }

    
    return(
        <>
            <form className='form' onSubmit={searchMovies}>
                <label htmlFor='query' className='label'>Movie Name</label>
                <input className='input' type='text' name='query' placeholder='i.e Bitelchus' value= {query} onChange= {(e) => setQuery(e.target.value)}></input>
                <button className='button' type='Submit'>Search</button>
            </form>
            <div className='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => 
                    <CardContent movie= {movie} key={movie.id}/> 
                )}
            </div>
        </>
    )
}

export default SearchMovie