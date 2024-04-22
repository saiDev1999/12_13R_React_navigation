import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom"
import HomeScreen from "../pages/home-screen"
import ContactScreen from "../pages/contact-screen"
import InvalidScreen from "../pages/invalid-screen"
import { Component, createContext, useState } from "react"
import ProductDetail from "../pages/productDetail"
import LoginScreen from "../pages/login-screen"
import CartScreen from "../pages/cart-screen"





export const DataShare = createContext()

const NavigationStack=()=>{
    const[login,setLogin]=useState(false)
    const[cartItems,setCartItems]=useState([])
    const[data,setData]=useState(
       { name:"sai",
        city:"hyderaab",
        isIndian :true,
        mobile:8980980
    })

    const changeData =()=>{
        setData({...data,name:"ram"})
    }

    const loginMethod=()=>{
        setLogin(true)
    }

    const addCartItems = (eachItem) =>{
        console.log('eachItem: ', eachItem);
        
        

        

        setCartItems([...cartItems,eachItem])
        console.log('cartItems: ', cartItems);


         
    }

    const removeCartItems= (id)=>{

    }

    return(
        <DataShare.Provider value={{
            data,
            changeData,
            loginMethod,
            cartItems,
            addCartItems,
            removeCartItems

        }} >

      
        <BrowserRouter>
      

    {
        !login
        ?
        <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="/contact" Component={ContactScreen} >
            <Route index Component={InvalidScreen} />

        </Route>
        <Route path="*" Component={InvalidScreen} />
        <Route path="/cartScreen" Component={CartScreen} />
        <Route path=":brand/:productId" Component={ProductDetail} />
        </Routes>
        :
        <Routes>
        <Route path="/" Component={LoginScreen} />
        </Routes>
    }

         


    

    

        </BrowserRouter>
        </DataShare.Provider>
    )
}

export default NavigationStack






// Dynamic routing : 
// if routing or navigation done using specific id , we will load the one component , but only content 

// http://localhost:3000/hyderabad/red-rhino-hitech-city/info
// 
// 
// 
// <Route path=":city/:restaurant/info" Component={<DeatilComponent/>} />





// home 
// about 
// setting 
// contact 