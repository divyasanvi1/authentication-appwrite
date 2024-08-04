import React from 'react'
import { useState } from 'react'
import Login from "./Login"
import {Link} from "react-router-dom"
import {account,ID} from "../library/appwrite"


const Signup =() =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
     //event state
     const[loading,setLoading]=useState(false);
     const[error,setError]=useState(null);
    //form submit
    const handleRegistration=(e)=>{
       e.preventDefault();
       setLoading(true);
       setError(null);
       account.create(ID.unique(),email,password,name).then((res)=>{
        console.log(res);
       })

    }
    return (
        <div className="background">
            <h1>Create an account</h1>
            <form className="form" onSubmit={handleRegistration}>
              <label>Full Name</label>
              <input type ="text"
               placeholder="Enter Full Name"
                required 
                input={name}
                 onChange={(e)=>setName(e.target.value)}/>
              <br/>
              <label>Email</label>
              <input type ="text" 
              placeholder="Enter Email"
               required 
               input={email}
                onChange={(e)=>setEmail(e.target.value)}/>
              <br/>
              <label>Password</label>
              <input type ="text" 
              placeholder="Enter Password" 
              required 
              input={password} 
              onChange={(e)=>setPassword(e.target.value)}/>
              <br/>
              {error && <div className="erorr-msg">{error}</div>}
              <div className="submit-div">
               <p>
                  Already have an account? <Link to="/Login">Login</Link>
               </p>
               <button type="submit" className="submit-btn">
                {loading?"...": "SIGN UP"}
                </button>
              </div>
            </form>
        </div>
    )
}

export default Signup