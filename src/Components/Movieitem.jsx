import React, { useState } from 'react'
import { createImageUrl } from '../services/movieServices';
import { FaHeart,FaRegHeart} from "react-icons/fa";

const Movieitem = ({movie}) => {
    const[like,setlike]=useState(false);
    const {title,backdrop_path,poster_path}=movie;
  return (
   // <div><p>{`${movie.title}|${movie.id}`}</p></div>
   <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
    <img className=' w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path ,"w500")} alt ={title} />
   

   <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
    <p className='whitespace-normal test-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
   </div>
   <p>
    {like ? (<FaHeart size={20} className='absolute top-2 left-2 text-gray-300'/>) : (<FaRegHeart size={20}  className='absolute top-2 left-2 text-gray-300'/>)}
   </p>
   
   
   </div>

  );
};

export default Movieitem;