

import React ,{useState} from  'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Comppage = () => {
    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    computerData : computerData.filter((orange)=>selectedproduct.includes(orange.company))
    return(
    <>
    <Navbar />
    <div className="fullpage">
    <div className="proselected">
        {computerData.map((phone)=>{
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
                    <Link to={`/computer/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image} alt="computers" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.company},{item.model}
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

export default Comppage