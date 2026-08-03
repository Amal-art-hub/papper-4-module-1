// function Student(){
//   return (
//     <>
//     <h1>Name:Amal</h1>
//     <h2>Age:29</h2>
//     </>
//   )
// }

// export default Student;

//======================================


// function Student(props){
//   return <>
//   <h1>Name:{props.name}</h1>
//   <h2>age:{props.age}</h2>
//   </>
// }


// function App(){
//   return (
//     <Student name="amal" age={29}/>
//   )
// }

// export default App;

//================


// import {useState}  from "react";

// function Counter(){


//   const [state,setCount]=useState(0);

//   return (


//     <>
//     <h1>Count:{state}</h1>

//     <button onClick={()=>setCount(state+1)}>Increase</button>
    
//     </>

//   )
// }

// export default Counter;

//====================




// function Student(){

// const students = ["Amal", "Rahul", "Anu"];

// return (

//   <ul>

//     {students.map((stu,index)=>{
//       return <li key={index}>{stu}</li>
      
//     })}
    
//   </ul>

// )

// }


// export default Student;


//======================================================



// import {useEffect,useState}  from "react";



// function App(){


//   const [users,setdata]=useState([]);


// useEffect(()=>{


// const fetchdata=async()=>{


// try  {

//   const response=await fetch("https://jsonplaceholder.typicode.com/users");

//   const data=await response.json();

//   setdata(data)
// }catch(error){
//   console.error(error);
// }

// }


// fetchdata()


// },[]);

// return (

//   <div>

// {
// users.map((user)=> <p  key={user.id}>{user.name}</p>)

// }


//   </div>
// )

// }


// export default App;

//========================================================useref




// import {useRef}  from "react";

// function InputFocus(){

// let input=useRef(null);

// let handlefoc=()=>{
// input.current.focus();

// console.log(input.current.value)
// }


// return (

//   <>
  
//   <input type="text"  ref={input} />


//       <br />
//       <br />

//   <button onClick={handlefoc}> focus on input</button>
  
//   </>

// )

// }

// export default InputFocus;

//======================================

// import {useRef}  from "react";


// function InputValue(){

//   let inputref=useRef(null);

//   let showfun=()=>{
//     console.log(inputref.current.value)
//   }


//   return (

//     <>
    
//     <input type="text"  ref={inputref} />

//     <br/>
//     <br/>

//     <button  onClick={showfun}> click here to show</button>
    
//     </>

//   )
// }

// export default InputValue;

//==================


// import {useState}  from "react";


// function InputExample(){

//   const [state,setState]=useState(" ");

//   return (

// <>

// <input type="text"  onChange={(event)=>setState(event.target.value)}/>

// <p>{state}</p>

// </>

//   )
// }



// export default InputExample;

//=======================


import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App(){
  return (

    <BrowserRouter>
    
    <nav>
      <Link to="/">Home</Link>


      {"|"}
      <Link to="/about">About</Link>
    </nav>


<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>


</Routes>




    </BrowserRouter>
  )
}

export default App;