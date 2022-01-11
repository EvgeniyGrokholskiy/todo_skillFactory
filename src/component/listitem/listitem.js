import React from "react";
import style from "./listitem.module.css";

const ListItem = ({name, checked, setDone = null, date = null}) => {

    return (
        <div className={style.listItem}>
            <label className={checked ? style.checked : ""}>
                <input className={style.checkbox} type={"checkbox"} checked={checked} onChange={setDone}/>
                {name}
            </label>
            {
                date && checked ?
                    <span className={style.complitionDate}>{` Завершено: ${date}`}</span>
                    :
                    <></>
            }
        </div>
    )
}

export default ListItem;