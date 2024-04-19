import { useContext, useEffect, useState } from "react"
import Header from "../components/header"
import axios from "axios"
import { Link } from "react-router-dom"
import { DataShare } from "../navigation/navigation-stack"
import UseEffectExample from "../hooks/useEffectEx1"

const HomeScreen=()=>{
    const[products,setProducts]=useState([])
//    const {name}  = useContext(DataShare)

    useEffect(()=>{
        fetchProducts()

    },[])

    const fetchProducts=async()=>{
        try{
            const response = await axios.get("https://dummyjson.com/products")
            console.log(response)
            if(response.status===200){
                setProducts(response.data.products)
            }else{
                console.error("unexpected error")
            }


        }catch(err){
            console.error(err)
        }
       

    }

 
    return(
        <>
             <Header/>
        <h3>Wellcome to HomeScreen  </h3>
        <UseEffectExample/>


        {
            products.length>0
            ?
        <>
        {
            products.map(eachProduct=>{

                const{brand,category,description,price,title,thumbnail,id}=eachProduct

                return(
                    <>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{category}</p>
                    <img src={thumbnail} alt={title} />
                    <button>
                        <Link  to={`${brand}/${id}`}  >
                        click to see product</Link>
                    </button>
                    </>

                )
            }
            

            )
        }
        
        </>

            :
            <h3>Loading..</h3>
        }
   
        </>
    )
}

export default HomeScreen