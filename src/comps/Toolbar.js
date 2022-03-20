import React from 'react';
import {useContext} from "react";
import {Link} from "react-router-dom"
import mainContext from "../context/mainContext";

const Toolbar = () => {
    const {user} = useContext(mainContext)
    return (
        <div className="toolbar">
            <div className="links">
                <Link to="/">Home</Link>
                {!user && <Link to="/auth">Sign in</Link>}
                {user && <Link to="/upload">Upload post</Link>}
                <Link to="/search">Search</Link>
            </div>
            <div>
                {user && user.email}
            </div>
        </div>
    );
};

export default Toolbar;