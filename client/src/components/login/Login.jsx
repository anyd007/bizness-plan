import React from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () =>{

    const history = useNavigate()
    return(
        <div className="login">
            <div className="login__title">
                <AiOutlineCloseSquare onClick={()=>history("/")} className="login__title--close"/>
                <h2>LOGOWANIE</h2>
                <p>podaj nazwę użytkownika i hasło stworzone w procesie rejestracji</p>
            </div>
            <div className="login__panel">
                <div className="login__panel--username">
                    <label htmlFor="log-username">
                        <input type="text" name="log-username" id="log-username" 
                             placeholder="NAZWA UŻYTKOWNIKA"/>
                        <span className="spanAnime">NAZWA UŻYTKOWNIKA</span>
                </label>
                </div>
                <div className="login__panel--password">
                    <label htmlFor="log-password">
                        <input type="text" className="log-password" id="log-password" placeholder="HASŁO" />
                        <span className="spanAnime">HASŁO</span>
                </label>
                </div>
                <div className="login__panel--button">
                    <button>ZALOGUJ</button>
                </div>
            </div>
        </div>
    )
}

export default Login;