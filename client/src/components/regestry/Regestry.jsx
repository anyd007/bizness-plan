import React from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import "./regestry.css"

const Regestry = () =>{
    const history = useNavigate()
    return(
        <div className="regestry">
            <div className="regestry__title">
                <AiOutlineCloseSquare onClick={()=>history("/")} className="regestry__title--close"/>
                <h2>ZAREJESTRUJ SIĘ</h2>
                <p>nazwa użytkownika musi zawierać min. 3 znaki<br />hasło min. 6 znaków</p>
            </div>
            <div className="regestry__panel">
                <div className="regestry__panel--username">
                    <label htmlFor="username">
                        <input type="text" name="username" placeholder="NAZWA UŻYTKOWNIKA" />
                            <span className="spanAnime">NAZWA UŻYTKOWNIKA</span>
                    </label>
                </div>
                <div className="regestry__panel--password">
                    <label htmlFor="password">
                        <input type="text" name="password" className="x" placeholder="PODAJ HASŁO"/>
                            <span className="spanAnime">PODAJ HASŁO</span>
                    </label>
                </div>
                <div className="regestry__panel--repassword">
                    <label htmlFor="repassword">
                        <input type="text" name="repassword" placeholder="POWTÓRZ HASŁO"/>
                            <span className="spanAnime">POWTÓRZ HASŁO</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Regestry;