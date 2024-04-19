import { Link, useNavigate } from "react-router-dom"

const InvalidScreen =()=>{
    const navigate =useNavigate()


    const navigateToHome=()=>{
        //functional routing using navigate
        const loginSuccess=true
        if(loginSuccess){
            navigate("/")

        }else{
            console.log("hello")
        }
      

    }

    return(
        <>
        <h4>Invalid screen</h4>

        <Link>Back to Home</Link>
        {/* <button  onClick={navigateToHome} >
            Back to home
        </button> */}

        </>
    )
}

export default InvalidScreen