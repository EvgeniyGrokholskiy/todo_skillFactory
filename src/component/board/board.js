import React from "react";
import style from "./board.module.css";
import ListItem from "../listitem/listitem";
import InputTask from "../inputtask/inputtask";
import Button from "../button/button";
import {logDOM} from "@testing-library/react";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {id: 0, name: "123", done: false, doneTime: null},
                {id: 1, name: "345", done: false, doneTime: null},
                {id: 2, name: "678", done: false, doneTime: null},
                {id: 3, name: "901", done: false, doneTime: null},
                {id: 4, name: "234", done: false, doneTime: null},
            ],
            tabNumber: 1,
            index: 5,
            newTask: "",
            doneTask: [],
        }
    }

    changeActiveTab = (id) => {
        this.setState({
            tabNumber: id
        })
    }

    changeText = (text) => {
        this.setState({
            newTask: text
        })
    }

    setDone = (id) => {
        const time = new Date().toLocaleTimeString()

        const newTodo = this.state.todo.map((task) => {
            if (task.id === id) {
                task.done = !task.done
                task.doneTime = time
            }

            return task
        })

        this.setState({
            todo: newTodo
        })
    }

    addTask = () => {
        if (this.state.newTask === "") return
        let newTaskObj = {
            id: this.state.index + 1,
            name: this.state.newTask,
            done: false
        }

        this.setState({
            todo: [...this.state.todo, newTaskObj],
            index: this.state.index + 1,
            newTask: ''
        })
    }

    deleteTask = () => {
        let newTodo = this.state.todo.filter((task) => !task.done)

        this.setState({
            todo: newTodo,
        })
    }

    completeTask = () => {
        let newEndTasks = this.state.doneTask
        let endTask = this.state.todo.filter((task) => task.done)
        newEndTasks.push(endTask)
        console.log(newEndTasks);
        this.setState({
            doneTask: [...this.state.doneTask, newEndTasks]
        })

        let newTodo = this.state.todo.filter((task) => !task.done)

        this.setState({
            todo: newTodo,
        })
    }

    render() {

        const tasksList = this.state.todo.map((task) => {
            return <ListItem key={`${task.id}${task.name}`} name={task.name} checked={task.done} date={task.doneTime}
                             setDone={() => {
                                 this.setDone(task.id)
                             }}/>
        })

        const doneTaskList = this.state.doneTask.map((task) => {
            return <ListItem key={`${task.id}${task.name}`} name={task.name} checked={true} date={task.doneTime}/>
        })

        return (
            <div className={style.wrapper}>
                <h2 className={style.header}>Список задач.</h2>
                <div className={style.tabs}>
                    <div className={`${style.tab} ${this.state.tabNumber === 1 ? 'active' : ''}`} id={1}
                         onClick={(event) => {
                             this.changeActiveTab(Number(event.currentTarget.id))
                         }}>Актуальные
                    </div>
                    <div className={`${style.tab} ${this.state.tabNumber === 2 ? 'active' : ''}`} id={2}
                         onClick={(event) => {
                             this.changeActiveTab(Number(event.currentTarget.id))
                         }}>Завершенные
                    </div>
                </div>
                <div className={style.taskList}>
                    {
                        this.state.tabNumber === 1
                            ?
                            tasksList
                            :
                            doneTaskList
                    }
                </div>
                <div className={style.bottomPanel}>
                    <InputTask textInField={this.state.newTask} changeText={this.changeText}/>
                    <Button innerText={"Добавить задачу"} callback={this.addTask}/>
                    <Button innerText={"Удалить задачу"} callback={this.deleteTask}/>
                    <Button innerText={"Готово"} callback={this.completeTask}/>
                </div>

            </div>
        )
    }
}

export default Board;