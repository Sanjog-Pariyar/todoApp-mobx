/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite"
import { useState } from "react"

const AddTask = ({todo}) => {

    const [task, setTask] = useState('')

    const addNewTask = () => {
        const newTask = {
            title: task,
            finished: false
        }
        todo.addTask(newTask)
        setTask('')
    }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            className="input-field"
            type="text" 
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}/>
        <button onClick={addNewTask}>Add</button>
    </form>
  )
}

export default observer(AddTask)