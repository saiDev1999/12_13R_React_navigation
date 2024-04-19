
// State management : Managing the data 

import { useContext } from "react";

// 2 ways for state management : 

// 1. local state management : useState provides local state management

// 2. Global state management : managing the state globally or through out the application 

// 1. using props :
// prop drilling : To share the data to the destination component from the source component
// we need pass it through out all the component tree 

// drawback :

// 1. intermediate childrens will get disturb 
// 2. maintenence and readability gets disturbed 


// 2. context api : medium sized application 

// 3. Redux : for enterprise level sized application



// 2. context api : medium sized application  


// Context api is used to manage the data or state across globally by avoiding prop drilling situation 

// steps to create context api in react 

// 1. use create Context method from react (app.js or navigation)
// 2. Identify the components that you need to share the data 
// 3. wrap or encapsulate the identified components with created context along with provider 
// 4. Provide the value prop to the Wrapper and give the data that we need to share 
// 5. select the component , and use the data using useContext hook in react 


// useContext hook :

// it is predefined react hook which enables the component to use the global state 

// useContext hook accepts the create content method where data being shared 