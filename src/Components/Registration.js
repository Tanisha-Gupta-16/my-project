import React, { useState } from "react";
import '../Styles/Registration.css';

const Registration =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmitClick = async(e)=>{
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name, email, number, password})
        })
        const data = await res.json();
        if (data.success) {
      alert("User created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setNumber("");
    } else {
      alert("Error: " + data.error);
    }
    }

return !isRegistered ? 
  (<div className = "container">
    <p className="title">Register Here</p>
    <div className = "input_field_container">
        <input type = "text" placeholder="Name" name = "name" value = {name} onChange={(e)=>setName(e.target.value)}></input>
       <input type = "email" placeholder="Email" name = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
       <input type = "number" placeholder="Number" name = "number" value = {number} onChange={(e)=>setNumber(e.target.value)}></input>
       <input type = "password" placeholder="Password" name = "password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
       <button className="submitClass" onClick={(e)=>handleSubmitClick(e)}>Submit</button>
       <span className="text" onClick ={()=>setIsRegistered(true)}>Already registered? Login</span>
</div>) : (<div className = "container">
    <p className="title">Login</p>
    <div className = "input_field_container">
       <input type = "email" placeholder="Email" name = "email" value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
       <input type = "password" placeholder="Password" name = "password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
       <button className="submitClass">Login</button>
       <button className="submitClass">Login</button>
       <span className="text" onClick ={()=>setIsRegistered(false)}>Not registered? Register</span>
</div>)
}
export default Registration;