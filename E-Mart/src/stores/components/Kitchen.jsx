

import React from 'react'
import { kitchenData} from '../data/kitchen'

const Kitchen = () => {
    const FirstFiveimages = kitchenData.slice(0,5)
    return (
      <>
      <h2>Kitchen</h2>
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

export default Kitchen