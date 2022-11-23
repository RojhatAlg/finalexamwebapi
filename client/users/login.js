import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { loginMethode} from '../fetchApi/api.js';
import * as React from "react";

const Login = () => {
    /*
    if(email === email && password === password){
        navigate('/')
    }
    else{
        console.log("Sorry you need to fill login form");
    }

     */
       const[email, setEmail] = useState('');
       const[password, setPassword] = useState('');
       const navigate = useNavigate();
     
      
       const onchangEmail=(e)=> {
           const result = e.target.value;
           setEmail(result)
       
  }



  const onchangPassword=(e)=> {
       const result = e.target.value;
       setPassword(result)
    
   
  }
 
  const onSubmit=(e) =>{
       e.preventDefault()
       const obj ={
            email,
            password,
       }
       console.log(obj)
       loginMethode(obj)
       navigate('/')
     
      
  
  }


     return (
         <div>
             <div className="nav">
                 <ul>
                     <li className={"nav-detail"}>   <Link to='/'>Homepage</Link>
                     </li>
                 </ul>
             </div>
             <div className='div-form'>
                 <form className="form-group" onSubmit={onSubmit}>
                     <h1>login</h1>
                     <label>email</label>
                     <input placeholder="email" type="text" onChange={onchangEmail}/>
                     <label>password</label>
                     <input placeholder="password" type="password" onChange={onchangPassword}/>
                     <button>login</button>
                 </form>
             </div>
         </div>

     )
   }
   
   export default Login