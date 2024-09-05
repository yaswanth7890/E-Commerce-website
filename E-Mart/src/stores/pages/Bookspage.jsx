

import React,{useState} from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Bookspage = () => {
    const [selectedproduct,setSelectedproduct] =useState([])

    const companyhandler=(mango)=>{
        if(selectedproduct.includes(mango)){
            setSelectedproduct(selectedproduct.filter(item=> item!== mango))
        }else{
            setSelectedproduct([...selectedproduct,mango])
        }
    }

    const Filteredproduct=selectedproduct.length===0?
    booksData : booksData.filter((orange)=>selectedproduct.includes(orange.category))

    return (
        <>
        <Navbar />
        <div className="fullpage">
    <div className="proselected">
        {booksData.map((phone)=>{
            return(
                <div className='proinput'>
                    <label>
                        <input type="checkbox"
                        checked={selectedproduct.includes(phone.category)}
                        onChange={()=> companyhandler(phone.category)} 
                        />
                        {phone.category}
                    </label>
                    </div>
            )
        })}
    </div>
        <div className='pagesection'>
            {Filteredproduct.map((item)=>{
                return(
                    <div>
                        <Link to={`/books/${item.id}`}>
                    <div className='pageimg'>
                        <img src={item.image} alt=" Books are not available" />
                    </div>
                    </Link>
                    <div className="promodel">
                        {item.title},{item.price}
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

export default Bookspage