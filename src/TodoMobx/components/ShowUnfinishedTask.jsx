/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";

const ShowUnfinishedTask = ({todo}) => {

    const handleRemainingTask = (todo) => {
        todo.setCurrentFilter('remaining')
    }

    const handleDelete = (todoItem) => {
        todo.deleteTask(todoItem)
    }

    const todos = todo.getCurrentFilteredTasks()

  return (
    <div className='todo-container'>
        <button onClick={() => handleRemainingTask(todo)}>Remaining Task</button>
        <div style={{display: "flex", flexDirection: "column"}}>
        {
            todo.currentFilter === 'remaining' && (
                (todos.map((todoItem) => (
                    <li key={todoItem.title} style={{display: "flex",marginBottom:"10px"}} className='list-container'>
                        <input 
                        style={{marginRight: "20px"}}
                            type="checkbox" 
                            defaultChecked={todoItem.finished}
                            onChange={() => todo.toggleTask(todoItem)}/>
                        <p style={{fontSize: "20px"}}>{todoItem.title}</p>
                        <button className='delete-btn' onClick={() => handleDelete(todoItem.title)}>Delete</button>
                    </li>
                )))
            )
        }
        </div>
    </div>
  )
}

export default observer(ShowUnfinishedTask)