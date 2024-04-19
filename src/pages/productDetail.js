import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const ProductDetail=()=>{
    const {productId}=useParams()
    const[product,setProduct]=useState({})
    useEffect(()=>{
        fetchProduct()
    },[productId])

    const fetchProduct =async()=>{
        try{
        const response=await axios.get(`https://dummyjson.com/products/${productId}`)
        if(response.status===200){
            setProduct(response.data)
        }}catch(err){
            console.error(err)
        }
    }
    return(
        <>
        <h2>Product details</h2>
        {
            <>
            <h5>{product?.brand}</h5>
            <h5>{product?.category}</h5>
            <h5>{product?.description}</h5>
            <img src={product?.thumbnail} alt={product?.title} />
            </>
        }

        </>
    )
}

export default ProductDetail




// useParams :
// usePramas is a hook provided by react router dom , it is used to collect the dynamic
// id or content from the url 