

import React ,{useState} from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Acpage = () => {

    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    acData : acData.filter((orange)=>selectedproduct.includes(orange.company))
  

    return (
        <>
        <Navbar />
        <div className="fullpage">
    <div className="proselected">
        {acData.map((phone)=>{
            return(
                <div className='proinput'>
                    <label>
                        <input type="checkbox"
                        checked={selectedproduct.includes(phone.company)}
                        onChange={()=> companyhandler(phone.company)} 
                        />
                        {phone.company}
                    </label>
                    </div>
            )
        })}
    </div>

        <div className='pagesection'>
        {Filteredproduct.map((item)=>{
            
                return(
                    <div>
                        <Link to={`/ac/${item.id}`}>
                    <div className='pageimg'>
                        <img src={item.image} alt="Ac items" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.company},{item.model}
                    </div>
                    </div>
                )
            })}
            </div>
            </div>
            </>
  )
}

export default Acpage