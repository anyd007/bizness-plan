import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { RegesrtyInfo } from "../infos/Infos";
import { useInfo } from "../../context/InfosContext";
import "./regestry.css"

//użycie reducera!!
const initalState = {
    username: '',
    password: '',
    repassword: ''
}
function reducer(state, action) {
        return {...state, [action.input] :action.value}
}
//--------------------------
const Regestry = () =>{
    const history = useNavigate();
    const { info, setInfo } = useInfo()

    //użycie reducera!-----------
    const [state, dispatch] = useReducer(reducer, initalState);
    const handleInputChange = e =>{
        const action = {
            input: e.target.name,
            value: e.target.value
        }
        dispatch(action)
    }
    //-----------
    
    const handleSubmmit = () =>{
        if(state.username < 3){
            setInfo(true)
        }
    }

    return(
        <div className="regestry">
            {info && <RegesrtyInfo />}
            <div className="regestry__title">
                <AiOutlineCloseSquare onClick={()=>history("/")} className="regestry__title--close"/>
                <h2>ZAREJESTRUJ SIĘ</h2>
                <p>nazwa użytkownika musi zawierać min. 3 znaki, hasło min. 6 znaków</p>
            </div>
            <div className="regestry__panel">
                <div className="regestry__panel--username">
                    <label htmlFor="username">
                        <input 
                        type="text" 
                        name="username" 
                        placeholder="NAZWA UŻYTKOWNIKA" 
                        onChange={handleInputChange}
                        />
                            <span className="spanAnime">NAZWA UŻYTKOWNIKA</span>
                    </label>
                </div>
                <div className="regestry__panel--password">
                    <label htmlFor="password">
                        <input 
                        type="text" 
                        name="password" 
                        placeholder="PODAJ HASŁO"
                        onChange={handleInputChange}
                        />
                            <span className="spanAnime">PODAJ HASŁO</span>
                    </label>
                </div>
                <div className="regestry__panel--repassword">
                    <label htmlFor="repassword">
                        <input 
                        type="text" 
                        name="repassword" 
                        placeholder="POWTÓRZ HASŁO"
                        onChange={handleInputChange}
                        />
                            <span className="spanAnime">POWTÓRZ HASŁO</span>
                    </label>
                </div>
                <div className="regestry__panel--button">
                    <button onClick={handleSubmmit}>ZAREJESTRUJ</button>
                </div>
            </div>
        </div>
    )
}

export default Regestry;