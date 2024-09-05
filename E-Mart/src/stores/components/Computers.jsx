import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
    const FirstFiveimages = computerData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
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

export default Computers