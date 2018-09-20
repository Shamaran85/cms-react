import React from 'react';
import { NavLink } from "react-router-dom";

const logo = () => {
    return (
        <div className="logo">
            <NavLink exact to="/" activeClassName="active">Jack<span> & </span>Bones</NavLink>
        </div>
    );
};

export default logo;
