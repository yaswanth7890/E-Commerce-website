import React from 'react'
import { acData } from '../stores/data/ac'
import {useParams }  from 'react-router-dom'
import Navbar from '../stores/components/Navbar';

import { useCart } from '../stores/context/Cartcontext';

const Acsingle = () => {

    const {id} = useParams();

    const {addTocart} = useCart();

    const product = acData.find((item)=>item.id === id);


  return (
    
    <>
    <Navbar />
    <div className="indsection">
        <div className="indimage">
            <img src={product.image} alt="" />
        </div>
        <div className="ind-details  space">
            <div className="indcomapny">
                <h2> {product.company}</h2>
            </div>
        <div className="indmodel space">
            <h3>{product.model}</h3>
        </div>
        <div className="indprice space">
            <h3>{product.price}</h3>
        </div>
        <div className="inddesc space">
            <p>
                {product.description}
            </p>
        </div>
        <button onClick={()=>addTocart(product)}>Add to cart</button>
        </div>
    </div>
    </>
  )
}

export default Acsingle