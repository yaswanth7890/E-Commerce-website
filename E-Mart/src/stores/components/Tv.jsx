

import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const FirstFiveimages = tvData.slice(0,5)
    return (
      <>
      <h2>Tvs</h2>
      <div className='prosection'>
      {
      FirstFiveimages.map((item)=>{
          return(
              <div className='probox'>
              <img className='proimage' src={item.image} alt="tv"/>
              </div>
          )
  
      })
  
      }
  </div>
    
    </>
    )
}

export default Tv