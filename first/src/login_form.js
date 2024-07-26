import {useRef,useState,useEffect}from "react";

function Login(){
    const collegeIdRef=useRef(null); //reference
    const passwordRef = useRef(null);
    const [loginMessage,setMessage] = useState("");
    const formSubmitted=(event)=>{
        event.preventDefault();//prevent reload
        if(collegeIdRef.current.value=== passwordRef.current.value)
        {
            setMessage("Correct");
        }
        else{
            setMessage("Incorrect");
        }
        /*console.log("Form Submitted!");
        console.log(firstRef.current.value);*/
    }
    return(
        <div className="card" style={{width:'500px'}}>
            <h1>Login</h1>
            <p>Enter your details to login</p>
            <form onSubmit={formSubmitted}
            style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>CollegeId</label>
                <input type="text" placeholder="CollegeId" ref={collegeIdRef}/>
                <label>Password</label>
                <input type="password" placeholder="Password" ref={passwordRef}/>
                <button type="submit">Submit</button>
                <p>{loginMessage}</p>
            </form>
        </div>
    );
}
export default Login;