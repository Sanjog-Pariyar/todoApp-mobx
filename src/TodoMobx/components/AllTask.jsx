/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite"

const AllTask = ({todo}) => {

    const allTasks = () => {
        todo.setCurrentFilter('all')
    }

  return (
    <div>
        <button onClick={() => allTasks()}>All Task</button>
    </div>
  )
}

export default observer(AllTask)