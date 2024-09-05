import React from 'react'
import {acData} from '../data/ac'

const Ac = () => {
    const FirstFiveimages = acData.slice(0,5)
    return (
      <>
      <h2>AC</h2>
      <div className='prosection'>
      {
      FirstFiveimages.map((item)=>{
          return(
              <div className='probox'>
              <img className='proimage' src={item.image} alt="AC"/>
              </div>
          )
  
      })
  
      }
  </div>
    
    </>
  )
}

export default Ac