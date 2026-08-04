import {useNavigate}  from "react-router-dom";

function Login(){

    const navigate=useNavigate();

    const handlelogin=()=>{
  navigate("/")
    };


    return (


        <>
        <h2>Login page</h2>

        <button onClick={handlelogin}>Login</button>
        
        </>
    )


}

export default Login;