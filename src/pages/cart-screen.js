import { useContext } from "react"
import Header from "../components/header"
import { DataShare } from "../navigation/navigation-stack"


const CartScreen =() =>{
    const{cartItems}=useContext(DataShare)
    console.log(cartItems,"carItems")
    return(
        <>
        <Header/>
        <h3>Cart page</h3>
        {
            cartItems.length>0
            ?
            <>
            
            {
                cartItems.map(eachCart=>{
                    const {thumbnail,brand,category}=eachCart
                    return(
                        <>
                        <h5>{brand}</h5>
                        <h5>{category}</h5>
                        <img src={thumbnail} width={100} height={100} />
                        <button>Remove from cart</button>
                        </>
                    )
                })
            }
            </>
            :
            <h5>Cart is empty</h5>
        }
        </>
    )
}

export default CartScreen