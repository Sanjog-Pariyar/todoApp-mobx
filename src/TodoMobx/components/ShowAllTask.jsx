/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { observer } from "mobx-react-lite"

const ShowAllTask = ({todo}) => {

    const handleDelete = (deleteTitle) => {
        todo.deleteTask(deleteTitle)
    }

    const todos = todo.todos

  return (
    <div>
        <ul>
            {
                todos.map((todoItem) => (
                        <li key={todoItem.title} style={{display: "flex",marginBottom:"10px"}} className='list-container'>
                            <input 
                            style={{marginRight: "20px"}}
                                type="checkbox" 
                                defaultChecked={todoItem.finished}
                                onChange={() => todo.toggleTask(todoItem)}/>
                            <p style={{fontSize: "20px"}}>{todoItem.title}</p>
                            <button className='delete-btn' onClick={() => handleDelete(todoItem.title)}>Delete</button>
                        </li>
                ))
            }
        </ul>
    </div>
  )
}

export default observer(ShowAllTask)