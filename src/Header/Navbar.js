import React from 'react';
import { NavLink } from "react-router-dom";

const navbar = () => {
    return (
        <ul className="navbar" >
            <li> <NavLink exact to="/" activeClassName="active">Home</NavLink> </li>
            <li> <NavLink to="/news" activeClassName="active">News</NavLink> </li>
            <li> <NavLink to="/sale" activeClassName="active">Sale</NavLink> </li>
            <li> <NavLink to="/clothes" activeClassName="active">Clothes</NavLink> </li>
            <li> <NavLink to="/shoes" activeClassName="active">Shoes</NavLink> </li>
            <li> <NavLink to="/accessories" activeClassName="active">Accessories</NavLink> </li>
            <li> <NavLink to="/bags" activeClassName="active">Bags</NavLink> </li>
            <li> <NavLink to="/sport" activeClassName="active">Sport</NavLink> </li>
            <li> <NavLink to="/checkout" activeClassName="active"><i className="fa fa-shopping-cart"> </i> (0)</NavLink> </li>

        </ul>
    );
}

export default navbar;
