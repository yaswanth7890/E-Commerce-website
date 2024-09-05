import React from 'react'

import { useCart } from './context/Cartcontext';
import Navbar from './components/Navbar';

const Usercart = () => {

    const {cartitems} = useCart()


  return (
    <>
    <Navbar />
    <div>
    <h2 className='y-cart'>Your Cart</h2>
      {cartitems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
    <div>
        {cartitems.map((item)=>{
            return(
                <div className='cartsection' >
                    <div className="cartimage">
                    <img src={item.image} alt=""/>
                    </div>
                    <div className="cartdetails">
                        <h3> {item.product}</h3>
                        <h2>
                            {item.price}
                        </h2>
                        <h3>
                            {item.model}
                        </h3>
                    </div>
                    <button className='removeBtn' onClick={() => removefromcart(item)}>Remove</button>
                   </div>
            )
        })}
    </div>
}
</div>
    </>
  )
}

export default Usercart