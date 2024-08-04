import React from 'react'
import {useState} from'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { account } from '../library/appwrite';
const Login =() =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

     //event state
     const[loading,setLoading]=useState(false);
     const[error,setError]=useState(null);
    
     //navigate
     const navigate=useNavigate();

     const handleLogin=(e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        account.createEmailPasswordSession(email,password)
        .then(()=>{
          navigate('/');
        }).catch((err)=>{
          setError(err.message);
        }).finally(()=>{
          setLoading(false);
        })
     };

    return (
        <div className="background">
             <h1>Login!!!</h1>
            <form className="form" onSubmit={handleLogin}>
              <label>Email</label>
              <input type ="text" 
              placeholder="Enter Email"
               required 
               value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
              <br/>
              <label>Password</label>
              <input type ="text" 
              placeholder="Enter Password" 
              required 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}/>
              <br/>
              {error && <div className="error-msg">{error}</div>}
              <div className="submit-div">
               <p>
                  Don't have an account? <Link to="/signup">Register</Link>
               </p>
               <button type="submit" className="submit-btn">
                {loading?"...": "LOGIN"}
                </button>
              </div>
            </form>
        </div>
    )
}

export default Login