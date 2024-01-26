import AddTask from "./components/AddTask"
import ReactiveComponents from "./components/ReactiveComponents"
import TodoContainer from "./store/Todo"

const todo = new TodoContainer()

const Todomobx = () => {
  return (
    <div>
        <AddTask todo={todo}/>
        <ReactiveComponents todo={todo}/>
    </div>
  )
}

export default Todomobx