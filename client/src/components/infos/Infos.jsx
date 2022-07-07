import React from "react";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useInfo } from "../../context/InfosContext";
import "./infos.css";

export const RegesrtyInfo = () =>{
const { info, setInfo } = useInfo()
    const handleClose = () =>{
        setInfo(false)
    }
    return(
        <div onClick={handleClose} className="regInfo">
            <div className="regInfo__text">
            <AiOutlineCloseSquare onClick={handleClose} className="regInfo__text--close"/>
                <h2>WPROWADZONE DANE NIE SPEŁNIAJA WARUKÓW REJESTRACJI<br />
                    SPRWADZ SWOJE DANE I PONÓW PRÓBĘ</h2>
            </div>
        </div>
    )
}