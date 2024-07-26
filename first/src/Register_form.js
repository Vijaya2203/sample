import { useState }from "react";

function Register(){
    const [collegeIdValue, setCollegeId]=useState(''); //reference
    const [passwordValue, setPassword]=useState('');
    const [emailValue, setEmail]= useState('');
    const [branchValue, setBranch]=useState('');
    const [gender, setGender]=useState('');
    const [year, setYear] = useState('');
    const [user, setUser] = useState({});

    const getCollegeId = (event) =>{
        setCollegeId(event.target.value)
        console.log(event.target.value);
    }
    const getPassword =(event)=>{
        setPassword(event.target.value)
        console.log(event.target.value);
    }
    const getEmail=(event)=>{
        setEmail(event.target.value)
        console.log(event.target.value);
    }
    const getBranch = (event)=>{
        setBranch(event.target.value)
        console.log(event.target.value);
    }
    const getYear=(event)=>{
        setYear(event.target.value)
        console.log(event.target.value);
    }
    const getGender=(event)=>{
        setGender(event.target.value)
        console.log(event.target.value);
    }
    const submitData=(event) => {
        event.preventDefault();
        const obj = {
            collegeIdValue, passwordValue, emailValue,branchValue,gender,year
        }
        setUser(obj)
        console.log(obj);
        console.log(user);
    }
    return(
        <div className="container">
            <div className="card" style={{width:'300px',padding:'20px'}}>
                <h1>Register</h1>
                <p>Enter your details to register</p>
                <form onSubmit={submitData}
                style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                    <label>College-Id</label>
                    <input type="text" onChange={getCollegeId}/>
                    <label>Password</label>
                    <input type="password" onChange={getPassword}/>
                    <label>Email-ID</label>
                    <input type="text" onChange={getEmail} placeholder="Enter email-id"/>
                    <label>Branch</label>
                    <select className ="form-select" value = {branchValue} onChange={(getBranch)}>
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="CS">CS</option>
                    </select>
                    <label>Year</label>
                    <select className ="form-select" value = {year} onChange={(getYear)}>
                        <option value="">Select Year</option>
                        <option value="1">I</option>
                        <option value="2">II</option>
                        <option value="3">III</option>
                        <option value="4">IV</option>
                    </select>
                    <div style = {{display:'flex'}}>
                        <input type="radio" checked={gender === 'Female'} value="Female" onChange={getGender}></input>Female
                        <input type="radio" checked={gender === 'Male'} value="Male" onChange={getGender}></input>Male
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={submitData}>REGISTER</button>
                </form>
            </div>
        </div>
    );
}
export default Register;