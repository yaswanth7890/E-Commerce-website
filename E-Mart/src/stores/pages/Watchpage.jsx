import React,{useState}  from 'react'

import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export const Watchpage = () => {
    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    watchData : watchData.filter((orange)=>selectedproduct.includes(orange.brand))

  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="proselected">
        {watchData.map((phone)=>{
            return(
                <div className='proinput'>
                    <label>
                        <input type="checkbox"
                        checked={selectedproduct.includes(phone.brand)}
                        onChange={()=> companyhandler(phone.brand)} 
                        />
                        {phone.brand}
                    </label>
                    </div>
            )
        })}
    </div>
    <div className='pagesection'>
        {Filteredproduct.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image} alt="mobiles" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.brand},{item.model}
                    </div>

                </div>
            )
        }

        )}
    </div>
    </div>
    </>
  )
}
