import React from 'react';
import {useRef} from "react";
import http from "../plugins/http"

const Register = () => {

    const email = useRef()
    const pass1 = useRef()
    const pass2 = useRef()

    async function auth () {
        const user = {
            email: email.current.value,
            pass1: pass1.current.value,
            pass2: pass2.current.value
        }

        const data = await http.post(user, "/register")

        console.log(data)
    }

    return (
        <div className="register-container">
            <div className='register'>
                <input type="text" ref={email} placeholder="email"/>
                <input type="text" ref={pass1}  placeholder="password one"/>
                <input type="text" ref={pass2}  placeholder="password two"/>
                <div className="d-flex">
                    <label htmlFor="admin">Admin</label>
                    <input type="checkbox" id="admin"/>
                </div>


                <button onClick={auth}>Register</button>
            </div>
        </div>
    );
};

export default Register;