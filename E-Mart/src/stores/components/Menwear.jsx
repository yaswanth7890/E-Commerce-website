

import React from 'react'

import {menData} from '../data/men'

const  Menwear = () => {
  const FirstFiveimages = menData.slice(0,5)
  return (
    <>
    <h2>Menwear</h2>
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

export default  Menwear