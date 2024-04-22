


// House relatives 

// import { useCallback } from "react"


// 1 milk 50 , sugar 40 

// Day 1 -> qty of milk packet * cost of milk packet  + qty of sugar packet * cost of sugar packet


// Day 2 -> 90 rupees 

// Day 3 -> 90 


// Day 10 sugar 50 

// 1milk 50 sugar 50 



// useMemo : useMemo is a hook in react functional based component , which memorizes 
// the value without recalculations (it will cache the values),it will recalcute only when 
// value dependent things were changed 

// syntax : useMemo will accept 2 args 

// 1. callback function 
// 2. dependency array 

// useMemo(()=>{},[])






// Day 1 -> path memorization

// useCallback : useCallback is a hook in react functional based component, which memorizes the 
// function without recalculations (which caches the function), function recalculation should be done
// when dependent things were changed 


// syntax : useCallback accepts 2 args 

// 1. callback function 
// 2. dependency array (variables)

// useCallback(()=>{},[])




// To increase the performace in the application we must use memorization techniques 






