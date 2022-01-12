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

        if (endTask.length === 0) return
        endTask.forEach((task)=>{
            newEndTasks.push(task)
        })

        console.log(newEndTasks);
        this.setState({
            doneTask: newEndTasks
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
                <TabbedFields changeActiveTab={this.changeActiveTab}
                              tabNumber={this.state.tabNumber}
                              doneTaskList={doneTaskList}
                              tasksList={tasksList}
                />

                {/*<div className={style.tabs}>
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
                </div>*/}
                <BottomPanel newTask={this.state.newTask}
                             changeText={this.changeText}
                             addTask={this.addTask}
                             deleteTask={this.deleteTask}
                             completeTask={this.completeTask}
                />

            </div>
        )
    }
}

export default Board;