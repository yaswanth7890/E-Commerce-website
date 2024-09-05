

import React from 'react'
import {womanData} from '../data/woman'

const Woman = () => {
    const FirstFiveimages = womanData.slice(0,5)
    return (
      <>
      <h2>Womanwear</h2>
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

export default Woman