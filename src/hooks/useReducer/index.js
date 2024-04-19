




// Use State : state mangement 
// Use effect : side effects 
// Use context : Context api 
// Use Ref : dom accessing , element ref 

import { useReducer } from "react"



// Reduce : Array.reduce((accu,valu)=>{},initialValue)
// reduce will return single value


// Use Reducer :  state mangement 

// useReducer is  a hook in functional based components which is used to manage the complex state 



// step 1: useReducer will accept 2 args 
// useReducer(reducerFunxtion,initialValue)

// step2 :useReducer return pair of values in a array 

// const [currentValue,dispatchFunction]=useReducer(reducerFunxtion,initialValue)

// reducerFunction -> (state,action)=>{}
// initialValue -> complex state (objects ,array of objects)


// useState + context api --> for simpler global state managment 

// useReducer + context api --> for complex global state management 

// action : action is a object which tells what to happen 
// example : INCREMENT_AGE 
// state  : currentage+10,

// action we will give type property 

// const action ={
//     type :"INCREMENT_AGE"
// }

// reducer function :
// it is used to manipulate the state based on the action 