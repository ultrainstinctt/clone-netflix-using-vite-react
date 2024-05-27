import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movieitem from './Movieitem';

const Movierow = ({title ,url}) => {
  const[movie,setMovies] =useState([]);


    useEffect(()=>{
      axios.get(url).then((response) => setMovies(response.data.results))
    }, [url]);
    console.log(movie);
    
  return (
    <>
    <h2 className='capitalize font-nsans-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
      <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movie.map((movie)=>(
         // <h1>{movie.title}</h1>
         <Movieitem key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Movierow;