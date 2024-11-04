import React from "react";

export default function Button({setColor, enterColor, text, backgroundColor}){

    const changeColor = () => {
        setColor(enterColor)
    }

    return(
        <button onClick={changeColor} className={backgroundColor}
        >{text}</button>
    )
}