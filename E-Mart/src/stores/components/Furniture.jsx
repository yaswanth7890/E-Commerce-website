

import React from 'react'
import {furnitureData} from '../data/furniture'

const Furniture = () => {
    const FirstFiveimages = furnitureData.slice(0,5)
    return (
      <>
      <h2>Furniture</h2>
      <div className='prosection'>
      {
      FirstFiveimages.map((item)=>{
          return(
              <div className='probox'>
              <img className='proimage' src={item.image} alt="mobile device"/>
              </div>
          )
  
      })
  
      }
  </div>
    
    </>
  )
}

export default Furniture