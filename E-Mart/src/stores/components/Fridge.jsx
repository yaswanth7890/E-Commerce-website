

import React from 'react'
import {fridgeData} from '../data/fridge'

const Fridge = () => {
    const FirstFiveimages = fridgeData.slice(0,5)
    return (
      <>
      <h2>Fridges</h2>
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

export default Fridge