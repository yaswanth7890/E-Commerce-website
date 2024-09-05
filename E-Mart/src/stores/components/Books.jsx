

import React from 'react'
import {booksData} from '../data/books'

const Books = () => {
    const FirstFiveimages = booksData.slice(0,5)
    return (
      <>
      <h2>Books</h2>
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

export default Books