import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () =>{

const history = useNavigate()
    return(
        <div className="home">
            <div className="home__title">
                <h1>TWOJE FINANSE</h1>
            </div>
            <div className="home__choose">
                <h2>WYBIERZ CO CHCESZ ZROBIĆ</h2>
                <div className="home__choose--reg">
                    <h3>REJESTRACJA</h3>
                    <button onClick={()=>history("/regestry")}>WEJDŹ</button>
                </div>
                <div className="home__choose--login">
                    <h3>LOGOWANIE</h3>
                    <button>WEJDŹ</button>
                </div>
            </div>
        </div>
    )
}

export default Home;