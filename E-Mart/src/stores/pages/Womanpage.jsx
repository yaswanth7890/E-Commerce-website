

import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const Womanpage = () => {
    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    womanData : womanData.filter((orange)=>selectedproduct.includes(orange.brand))

  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="proselected">
        {womanData.map((phone)=>{
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
                    <Link to={`/womanwear/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image} alt="womanwear" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.type},{item.brand}
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

export default Womanpage