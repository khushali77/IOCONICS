import React from "react";
import "../Css/language.css";

function Language(){
    return(
        <div className="language">
            <button className="english" onClick={()=>window.location.href='/products'}>English</button>
            <button className="hindi" onClick={()=>window.location.href='/products'}>Hindi</button>
        </div>
    );
}

export default Language;