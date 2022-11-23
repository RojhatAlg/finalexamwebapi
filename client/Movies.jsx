import * as React from "react";
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {FaSignInAlt,FaUser} from 'react-icons/fa'

import {AddMenu} from "./addMenu.jsx";
import ListMenu from "./listMenu.jsx";
import Login from "./users/login.js";
import Register from "./users/register.js";
import './App.css';
import {useEffect} from "react";


export function FrontPage() {


    return(
        <div>
            <div className="nav">
                <ul>
                    <li className={"nav-detail"}>   <Link to='/'>Homepage</Link>
                    </li>
                </ul>
                <ul>
                    <li><Link to="/login"><FaSignInAlt/>login</Link></li>
                    <li><Link to="/register"><FaUser/>register</Link></li>
                </ul>
            </div>

            <h1> Welcome to catering business </h1>
            <ul>
                <li>
                    <Link to={"/list"}> List Menu </Link>
                </li>
                <li>
                    <Link to={"/add"}> Add new Movie </Link>
                </li>
            </ul>
        </div>
    );
}

export function Movies(){
    return(
        <Routes>
            <Route path={"/list"} element={<ListMenu />} />
            <Route path={"/add"} element={<AddMenu />} />
        </Routes>
    );
}

export function Application() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/list"} element={<ListMenu />} />
                <Route path={"/add"} element={<AddMenu />} />
                <Route path={"/"} element={<FrontPage />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}