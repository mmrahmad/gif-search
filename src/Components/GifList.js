import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = ({gifs}) => {
  let gifsList;
  if(gifs.length >0){
    gifsList = gifs.map((gif) => <Gif url={gif.images.fixed_height.url} key={gif.id} />)
  }else{
    gifsList = <NoGifs />
  }
  return(
    <ul className="gif-list">
      {gifsList}
    </ul> 
  );
}

export default GifList;
