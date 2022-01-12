import React from 'react';
import style from "./tabbedfields.module.css";
import ListItem from "../../listitem/listitem";

function TabbedFields({todo, doneTask, setDone, tabNumber, changeActiveTab}) {

    const TasksList = todo.map((task) => {
        return <ListItem key={`${task.id}${task.name}`} name={task.name} checked={task.done} date={task.doneTime}
                         setDone={() => {
                             setDone(task.id)
                         }}/>
    })

    const DoneTaskList = doneTask.map((task) => {
        return <ListItem key={`${task.id}${task.name}`} name={task.name} checked={true} date={task.doneTime}/>
    })

    return (
        <>
            <div className={style.tabs}>
                <div className={`${style.tab} ${tabNumber === 1 ? 'active' : ''}`} id={1}
                     onClick={(event) => {
                         changeActiveTab(Number(event.currentTarget.id))
                     }}>Актуальные
                </div>
                <div className={`${style.tab} ${tabNumber === 2 ? 'active' : ''}`} id={2}
                     onClick={(event) => {
                         changeActiveTab(Number(event.currentTarget.id))
                     }}>Завершенные
                </div>
            </div>
            <div className={style.taskList}>
                {
                    tabNumber === 1
                        ?
                        TasksList
                        :
                        DoneTaskList
                }
            </div>
        </>
    );
}

export default TabbedFields;