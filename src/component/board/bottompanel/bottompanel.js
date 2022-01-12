import React from 'react';
import style from "./botompanel.module.css";
import InputTask from "../../inputtask/inputtask";
import Button from "../../button/button";

function BottomPanel({newTask, changeText , addTask, deleteTask, completeTask }) {
    return (
        <div className={style.bottomPanel}>
            <InputTask textInField={newTask} changeText={changeText}/>
            <Button innerText={"Добавить задачу"} callback={addTask}/>
            <Button innerText={"Удалить задачу"} callback={deleteTask}/>
            <Button innerText={"Готово"} callback={completeTask}/>
        </div>
    );
}

export default BottomPanel;