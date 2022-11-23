import React, {useContext, useEffect, useState} from "react";
import {MenuApiContext} from "./menuApiContext.jsx";
import {Link} from "react-router-dom";


export function ListMenu() {



    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`/api/menus`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);




    return (
        <div>
            <div className="nav">
                <ul>
                    <li className={"nav-detail"}>   <Link to='/'>Homepage</Link>
                    </li>
                </ul>
            </div>
            <tbody>
            <tr>
                <th>Dish Name: </th>
                <th>Category: </th>
                <th>Allergy: </th>
            </tr>
            {data.map((item) => (
                <tr>
                    <td>{item.dishname}</td>
                    <td>{item.category}</td>
                    <td>{item.allergy}</td>
                </tr>
            ))}
            </tbody>

        </div>
    );
}

export default ListMenu;