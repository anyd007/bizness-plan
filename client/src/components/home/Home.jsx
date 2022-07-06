import React from "react";
import "./home.css";

const Home = () =>{

    return(
        <div className="home">
            <div className="home__title">
                <h1>TWOJE FINANSE</h1>
            </div>
            <div className="home__choose">
                <h2>WYBIERZ CO CHCESZ ZROBIĆ</h2>
                <div className="home__choose--reg">
                    <h3>REJESTRACJA</h3>
                    <button>WEJDŹ</button>
                </div>
                <div className="home__choose--login">
                    <h3>ZALOGUJ</h3>
                    <button>WEJDŹ</button>
                </div>
            </div>
        </div>
    )
}

export default Home;