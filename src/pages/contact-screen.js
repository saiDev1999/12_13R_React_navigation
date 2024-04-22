import { useContext } from "react"
import Header from "../components/header"
import { DataShare } from "../navigation/navigation-stack"
import UseReducerExample from "../hooks/useReducer/useReducerExample"
import UseMemo from "../hooks/useMemo/useMemo"
import ParentComponent from "../hooks/useCallback/parent"

const ContactScreen=()=>{
  const {data,changeData}=useContext(DataShare)
    return(
        <>
          <Header/>
     {/* <UseMemo/> */}
     <ParentComponent/>
        </>
    )
}

export default ContactScreen