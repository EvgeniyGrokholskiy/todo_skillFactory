import React from "react";
import style from "./button.module.css";

const Button = ({callback, innerText}) => {
    return (
        <button onClick={callback} className={style.button}>{innerText}</button>
    )
}

export default Button;