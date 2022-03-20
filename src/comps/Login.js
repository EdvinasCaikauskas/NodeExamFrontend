import {useRef, useContext} from 'react';
import http from "../plugins/http";
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const nav = useNavigate()
    const email = useRef()
    const password = useRef()

    const {setUser} = useContext(mainContext)

    async function auth() {
        const user = {
            email: email.current.value,
            password: password.current.value,
        }

        const data = await http.post(user, "/login")
        setUser(data.user)
        console.log(data)

        if(data.success) {
            return nav('/')
        }
    }

    return (
        <div className="login-container">
            <div className="login">
                <input type="text" ref={email} placeholder="email"/>
                <input type="text" ref={password} placeholder="password"/>
                <div className="d-flex">
                    <label htmlFor="stay">Stay logged in</label>
                    <input type="checkbox" id="stay"/>
                </div>
                <button onClick={auth}>Login</button>
            </div>
        </div>
    );
};

export default Login;