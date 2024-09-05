

import React ,{useState} from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Kitchenpage = () => {
    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    kitchenData : kitchenData.filter((orange)=>selectedproduct.includes(orange.brand))

    return (
        <>
        <Navbar />
        <div className="fullpage">
    <div className="proselected">
        {kitchenData.map((phone)=>{
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
                        <Link to={`/kitchen/${item.id}`}>
                    <div className='pageimg'>
                        <img src={item.image} alt="not available" />
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

export default Kitchenpage