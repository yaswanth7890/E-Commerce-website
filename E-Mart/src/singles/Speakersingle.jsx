import React from 'react'

import {useParams }  from 'react-router-dom'
import Navbar from '../stores/components/Navbar';

import { useCart } from '../stores/context/Cartcontext';
import { speakerData } from '../stores/data/speaker';

const Speakersingle = () => {

    const {prod} = useParams();

    const {addTocart} = useCart();

    const product = speakerData.find((item)=>item.id === prod);


  return (
    
    <>
    <Navbar />
    <div className="indsection">
        <div className="indimage">
            <img src={product.image} alt={product.model} />
        </div>
        <div className="ind-details  space">
            <div className="indcomapny">
                <h2> {product.brand}</h2>
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

export default Speakersingle