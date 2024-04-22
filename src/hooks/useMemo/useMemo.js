import { useMemo, useState } from "react"



const UseMemo =()=>{

    const[age,setAge]=useState(10)

    const [salary,setSalary]=useState(10000)


    const ageEvenCalculation = useMemo(()=>{
        console.log("ageEvenCalculation rending")
        const even = age % 2 === 0
        return even ? "EVEN" : "ODD"
    },[age])


    

    const increaseAge = ()=>{
        setAge(age+1)
    }
    const increaseSalary = () =>{
        setSalary(salary+1)
    }




    return(
        <>
        <h1>Use memo example</h1>
        <h3>Age Calculation {ageEvenCalculation}</h3>
        <h4>{age}</h4>
        <h4>{salary}</h4>
        <button onClick={increaseAge} >Age increment</button>
        <button onClick={increaseSalary} >Salary increment</button>
        </>
    )
}

export default UseMemo