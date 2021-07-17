import React from "react";
import s1 from "../Assets/logo.png";
import "../Css/home.css";
// import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <img className="logo" src={s1} alt="IOCONICS"/>
            <button className="startShopping" type="submit" onClick={(e)=>window.location.href='/language'}>Start Shopping</button>
        </div>
    );
}

export default Home;