import React from 'react'

import {Link }  from 'react-router-dom'

import { useCart } from '../context/Cartcontext'

const Navbar = () => {

    const{cartitems} =useCart()
  return (
    <>
    <div className="navbarsection">
    <div className='navsection'>
    <Link to='/' className="custom-link">

        <div className='title'>
            <h2>E-Mart</h2>
        </div>

        </Link>

        <div className='search'>
            <input type='text' placeholder='search...' />
        </div>

        <div className='user'>
           <div className="userdetail">     SignIn/SignUp </div>
        </div>

        <Link to='/cartitem'>
        <div className='cart'>
            cart
            <span>
                {cartitems.length}
            </span>
        </div>
        </Link>

        </div>
        

        <div className='submenu'> 
            <ul>
                <Link to='/mobiles'>
                <li>Mobiles</li>
                </Link> 
                
                <Link to='/computer'>
                <li>Computers</li>
                </Link>
                <Link to='/menwear'>
                <li>MenFashion</li>
                </Link>
                <Link to='/womanwear'>
                <li>Woman dressing</li>
                </Link>
                <Link to='/furniture'>
                <li>Furniture</li>
                </Link>
                <Link to='/ac'>
                <li>Ac</li>
                </Link>
                <Link to='/kitchen'>
                <li>Kitchen</li>
                </Link>
                <Link to='/watches'>
                <li>Watches</li>
                </Link>
                <Link to='/Books'>
                <li>Books</li>
                </Link>
                <Link to='/fridge'>
                <li>Fridge</li>
                </Link>
                <Link to='/speakers'>
                <li>Speakers</li>
                </Link>
                <Link to='/tv'>
                <li>Tv</li>
                </Link>

            </ul>
        </div>
        </div>
        </>

       

  )
}

export default Navbar