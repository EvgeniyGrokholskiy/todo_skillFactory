import React from "react";
import stile from "./inputtask.module.css";

const InputTask = ({textInField,changeText}) => {

    return (
        <textarea className={stile.textarea} value={textInField} onChange={(event)=>{
            changeText(event.target.value)}}/>
    )

}

export default InputTask;