

import React,{useState} from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Speakerspage = () => {

    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    speakerData : speakerData.filter((orange)=>selectedproduct.includes(orange.brand))
  return (
    <>
    <Navbar />
    <div className="fullpage">
    <div className="proselected">
        {speakerData.map((phone)=>{
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
                    <Link to={`/speaker/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image}  alt="" />
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

export default Speakerspage