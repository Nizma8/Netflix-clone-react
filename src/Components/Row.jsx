import React, { useEffect, useState } from 'react';
import tmbdAxiosInstance from '../instance';
import './Row.css';

function Row({title,FetchUrl,isPoster}) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies,setMovies]=useState([])

  const fetchData = async()=>{
 const {data} = await tmbdAxiosInstance.get(FetchUrl)
 setMovies(data.results)

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='row'>
    <h1>{title}</h1>
    <div className='movie-row'>
    {
      movies.map(item=>(
        <img className={`${isPoster&&'movie-large'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no-img" />
      ))
    }
    </div>
    </div>
  )
}

export default Row