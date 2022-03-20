import React from 'react';
import Login from "../comps/Login";
import Register from "../comps/Register";

const AuthPage = () => {
    return (
        <div className="auth">

            <Register/>

            <Login/>
            
        </div>
    );
};

export default AuthPage;