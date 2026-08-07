


// const Child=memo(function Child({name}){

// return (

//   <>
//   <h1>child rendered:{name}</h1>


//   </>
// )

// });



// import  { memo,useState } from "react";



// function Parent(){

//   const [count,setState] =useState(0);

//   return (

// <>


// <h1>{count}</h1>

// <button  onClick={()=>setState(count+1)}>Increase</button>
// <h1>Parent rendered</h1>

// <Child  name="Amal"/>

// </>

//   )


// }

// export default Parent;

//======================

import React,{ useCallback,useState } from "react";

const Child = React.memo(function Child({ handleClick }) {
  console.log("Child Render");

  return (
   <>
    <button onClick={handleClick}>
      Child Button
    </button>

    <h1>Child Renderd</h1>
   </>
  );
});



// const Child = React.memo(function Child({ handleClick }) {
//   console.log("Child Render");

//   return (
//     <>
//       <button onClick={handleClick}>
//         Child Button
//       </button>
//     </>
//   );
// });


function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Hello");
  },[]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <h1>Parent Renderd</h1>

      <Child handleClick={handleClick} />
    </>
  );
}

export default Parent;


