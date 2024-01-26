/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { observer } from 'mobx-react-lite';
import AllTask from './AllTask';
import ShowAllTask from './ShowAllTask';
import ShowFinishedTask from './ShowFinishedTask';
import ShowUnfinishedTask from './ShowUnfinishedTask';


const ReactiveComponents = ({todo}) => {

  return (
    <div className='todo-container'>
        <div style={{display: "flex"}}>
            <ShowFinishedTask todo={todo}/>
            <ShowUnfinishedTask todo={todo} />
            <AllTask todo={todo} />
        </div>
        { todo.currentFilter === "all" && <ShowAllTask todo={todo}/>}
    </div>
  )
}

export default observer(ReactiveComponents)