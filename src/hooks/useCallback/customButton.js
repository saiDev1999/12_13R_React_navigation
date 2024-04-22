import React from "react"

const CustomButton = ({handleClick=()=>{},title="click"}) =>{
    console.log("buttton rendering",title)
    return(
        <button onClick={handleClick} >{title}</button>
    )
}

export default React.memo(CustomButton)


// React memo is HOC (higher order component) in react 
// which renders only when prop or state  changes 
// pure component 