import { useEffect, useState } from "react"




const UseEffectExample =()=>{


    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)

    const mouseMoveCapture=(event)=>{
        setX(event.clientX)
        setY(event.clientY)
        console.log(event.clientX,"event captured by x axios")
        console.log(event.clientY,"event captured by y axios")
        // Memory leak :
        // whenver any component unmounted or removed from dom , certain memory leaks can happen (mouse move)
        // In order to prevent the memory leaks , useEffect can have capability to prevent with in the return (function)
    }

    useEffect(()=>{

    window.addEventListener("mousemove",mouseMoveCapture)
    return ()=>{
        window.removeEventListener("mousemove",mouseMoveCapture)
    }
    },[])

    return(
        <>
        <h4>UseEffect example</h4>

        <h5>X axios coordinates {X}</h5>
        <h5>Y axios coordinates {Y}</h5>
        </>
    )
}
export default UseEffectExample





// useEffect :
// 1. componen did mount , component did update , component will unmount
// component will unmount ->  Memmory leaks will be prevented in component will unmount
