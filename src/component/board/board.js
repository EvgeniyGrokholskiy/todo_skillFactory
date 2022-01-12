import React from "react";
import style from "./board.module.css";
import TabbedFields from "./tabbedfields/tabbedfields";
import BottomPanel from "./bottompanel/bottompanel";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state
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

        this.setState({
            doneTask: newEndTasks
        })

        let newTodo = this.state.todo.filter((task) => !task.done)

        this.setState({
            todo: newTodo,
        })
    }

    render() {

        return (
            <div className={style.wrapper}>
                <h2 className={style.header}>Список задач.</h2>

                <TabbedFields tabNumber={this.state.tabNumber}
                              changeActiveTab={this.changeActiveTab}
                              setDone={this.setDone}
                              doneTask={this.state.doneTask}
                              todo={this.state.todo}
                />

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