import React from "react";
import s1 from "../Assets/logo.png";
import "../Css/home.css";

function Home(){
    return(
        <div className="home">
            <img className="logo" src={s1} alt="IOCONICS"/>
            <button type="submit">Start Shopping</button>
        </div>
    );
}

export default Home;