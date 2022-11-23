import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { MenuApiContext } from "./menuApiContext.jsx";
import {submitMenuMethode} from "./fetchApi/api.js";



export function AddMenu(){
    const navigate = useNavigate();
    const [dishname, setDishname] = useState("");
    const [category, setCategory] = useState("");
    const [allergy, setAllergy] = useState("");
    const [error, setError] = useState(false)

    const onchangDishname=(e)=> {
        const result = e.target.value;
        if(result ==null){
            setError(false)
        }
        setDishname(result)


    }
    const onchangCategory=(e)=> {
        const result = e.target.value;
        if(result ==null){
            setError(false)
        }
        setCategory(result)

    }

    const onchangAllergy=(e)=> {
        const result = e.target.value;
        if(result ==null){
            setError(false)
        }
        setAllergy(result)

    }

    const onSubmit=(e) =>{
        e.preventDefault()
        const obj ={
            dishname,
            category,
            allergy
        }
        console.log(obj)
        submitMenuMethode(obj)
        navigate('/')



    }



    return(
        <div>
            <div className="nav">
                <ul>
                    <li className={"nav-detail"}>   <Link to='/'>Homepage</Link>
                    </li>
                </ul>
            </div>
            {error && <div className="h1">plear fot fill the input</div>}
            <form className="form-group" onSubmit={onSubmit}>
                <h2>register the form</h2>
                <label>Dish name: </label>
                <input name='dishname' placeholder="dishname" type="text" value={dishname} onChange={onchangDishname} />
                <label>Category: </label>
                <input name='category' placeholder="category" type="text" value={category} onChange={onchangCategory} />
                <label>Allergy: </label>
                <input name='allergy' placeholder="allergy" type="text" value={allergy} onChange={onchangAllergy}/>
                <button type='submit'>register</button>
            </form>
        </div>

    );
}

