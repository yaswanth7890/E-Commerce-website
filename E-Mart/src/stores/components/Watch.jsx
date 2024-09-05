

import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    const FirstFiveimages = watchData.slice(0,5)
    return (
      <>
      <h2>Watches</h2>
      <div className='prosection'>
      {
      FirstFiveimages.map((item)=>{
          return(
              <div className='probox'>
              <img className='proimage' src={item.image} alt="computers"/>
              </div>
          )
  
      })
  
      }
  </div>
    
    </>
  )
}

export default Watch