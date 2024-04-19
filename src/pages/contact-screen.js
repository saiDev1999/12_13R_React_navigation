import { useContext } from "react"
import Header from "../components/header"
import { DataShare } from "../navigation/navigation-stack"
import UseReducerExample from "../hooks/useReducer/useReducerExample"

const ContactScreen=()=>{
  const {data,changeData}=useContext(DataShare)
    return(
        <>
          <Header/>

          <UseReducerExample/>
        <h3>Wellcome to contact screen  {data.name}</h3>
        <button onClick={changeData} >Click to change name</button>
        </>
    )
}

export default ContactScreen