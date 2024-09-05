import { createContext, useContext, useState } from "react";


const CartContext= createContext();

export const CartProvider =({children})=>{

    const[cartitems,setCartitems] = useState([]);

    const addTocart =(item)=>{
        setCartitems([...cartitems,item]);
    };

    const removefromcart=(item)=>{
        setCartitems(cartitems.filter((apple)=>apple!==item))
    }

    return(
        <CartContext.Provider value={{cartitems, addTocart, removefromcart}}>
          {children}
        </CartContext.Provider>
    );
};

export  const useCart=()=>{
    return useContext(CartContext);
};