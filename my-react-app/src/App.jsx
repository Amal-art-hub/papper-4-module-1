// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Hi Iam amal</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

//====================================


// function Header(){
//   return <h1>My website</h1>
// }


// function Footer(){
//   return <footer>2026 last i will get job</footer>
// }


// function App(){
//   return (
//     <>

// <Header/>

// <p>Hello world</p>

// <Footer/>

//     </>
//   )
// }

// export default App;

//=======================================

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Student from "./components/Student";


// function App(){
//   return (
//     <>
//     <Header/>
//     <Student name="Amal"  age={29} />
//      <Student name="rahulm"  age={25} />
//      <Student name="anu"  age={22} />
//     <Footer/>
//     </>
//   )
// }

// export default App;

//=========================

// function Welcome(prop){

//    console.log(prop);
//   return (
//     <>
//     <h1>Hello {prop.name}</h1>
//     <p>Age:{prop.age}</p>
   
//     </>
//   )

  
// }


// function App(){
//   return  (
//   <>
//     <Welcome name="Rahul"
//   age={29}
//   />

//   <Welcome name="Anu"/>
//   </>
//   )
// }


// export default App;

//====================

// import {useState} from "react";

// function Counter(){
//   let [count,setCount]=useState(0);

//   return (
//     <>
//     <h1>Count:{count}</h1>
//     <button onClick={()=>setCount(count+1)}>
//       Increase
//     </button>
    
//     </>
//   )
// }




// import { useState } from "react";

// function Toggle() {

//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>

//       {show && <h1>Hello React</h1>}
//     </>
//   );
// }






// function App(){
//   return (
//     <>
//     <h1>My App</h1>
//     <Toggle/>
//     </>
//   )
// }

// export default App;




// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("");

//   return (
//     <>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h2>{name}</h2>
//     </>
//   );

 
// }


//  export default App;

 //===============onclick


//  import {useState} from "react";

//  function App(){
//   const [count,setCount]=useState(0);
//   return (
//     <>
//     <h1>Counter</h1>
//     <h2>{count}</h2>

//     <button  onClick={()=>setCount(count+1)}>

//       Increment
      
//     </button>
//     </>
//   )
//  }


//  export default App;

//================



// import { useEffect } from "react";

// function App() {

//   useEffect(() => {
//     console.log("Component rendered");
//   }, []);

//   return (
//     <h1>Hello</h1>
//   );
// }

// export default App;

//============
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}


hihel