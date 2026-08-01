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


import {useState}  from "react";

function Counter(){


  const [state,setCount]=useState(0);

  return (


    <>
    <h1>Count:{state}</h1>

    <button onClick={()=>setCount(state+1)}>Increase</button>
    
    </>

  )
}

export default Counter;