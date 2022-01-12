import React from 'react';
import style from "./tabbedfields.module.css";

function TabbedFields({ tabNumber, changeActiveTab, tasksList, doneTaskList}) {

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
                        tasksList
                        :
                        doneTaskList
                }
            </div>
        </>
    );
}

export default TabbedFields;