import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { signMethode} from '../fetchApi/api.js';
import * as React from "react";



const Registers =() => {
     const[email, setEmail] = useState('');
     const[password, setPassword] = useState('');
     const[telephone, setTelephone] = useState('');
     const navigate = useNavigate();
     const [error, setError] = useState(false)
   
    
     const onchangEmail=(e)=> {
         const result = e.target.value;
         if(result ==null){
             setError(false)
         }
         setEmail(result)
     
}
const onchangPassword=(e)=> {
     const result = e.target.value;
     if(result ==null){
          setError(false)
      }
     setPassword(result)
  
 
}
const onchangTelephone=(e)=> {
     const result = e.target.value;
     if(result ==null){
          setError(false)
      }
     setTelephone(result)
 
}
const onSubmit=(e) =>{
     e.preventDefault()

     const obj ={
          email,
          password,
          telephone
     }

     console.log(obj)
     signMethode(obj)
     navigate('/login')

} 

  return (
      <div>
          <div className="nav">
              <ul>
                  <li className={"nav-detail"}>   <Link to='/'>Homepage</Link>
                  </li>
              </ul>
          </div>
          <div className='div-form' >
              {error && <div className="h1">plear fot fill the input</div>}
              <form className="form-group" onSubmit={onSubmit}>
                  <h2>register the form</h2>
                  <label>email</label>
                  <input name='email' placeholder="email" type="text" value={email} onChange={onchangEmail} />
                  <label>password</label>
                  <input name='password' placeholder="password" type="password" value={password} onChange={onchangPassword} />
                  <label>phone</label>
                  <input name='phone' placeholder="phone number" type="number" value={telephone} onChange={onchangTelephone}/>
                  <button type='submit'>register</button>
              </form>
          </div>
      </div>

  )
}

export default Registers