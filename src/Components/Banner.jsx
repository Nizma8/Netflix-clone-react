import React, { useEffect, useState } from 'react';
import './Banner.css';
import tmbdAxiosInstance from '../instance';

function Banner({FetchUrl}) {
  const base_url = "https://image.tmdb.org/t/p/original/";

const [movie,setmovie] =useState({})
  const fetchData = async()=>{
 const {data} = await tmbdAxiosInstance.get(FetchUrl)
   setmovie(data.results[Math.floor(Math.random()*data.results.length)])
  }

console.log(movie);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div style={{height:'600px',backgroundAttachment:'fixed',width:'100%',backgroundSize:'cover',
    backgroundImage:`url(${base_url}/${movie?.backdrop_path})`
  }}>

  <div className='banner-content'
  >
  <h1>{movie?.name}</h1>
  <h2>{movie?.overview?.slice(0,250)}...</h2>
  </div>
    </div>
  )
}

export default Banner