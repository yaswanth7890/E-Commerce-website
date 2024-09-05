import React from 'react'

import { mobileData } from '../data/mobiles'

const Mobiles = () => {

    const FirstFiveimages = mobileData.slice(0,5)
  return (
    <>
    <h2>Mobiles</h2>
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

export default Mobiles