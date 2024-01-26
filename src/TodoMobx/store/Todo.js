import { action, makeObservable, observable } from "mobx";

class TodoContainer {
    todos = [
        {
            title: 'Go to Gym',
            finished: false
        },
        {
            title: 'Check mails',
            finished: true
        },
        {
            title: 'Do Assignment',
            finished: false
        },
        {
            title: 'Buy books',
            finished: false
        },
        {
            title: 'Get groceries',
            finished: true
        }
    ];

    currentFilter = 'all'; // accepts: 'all'|'remaining'|'finished';

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTask: action,
            toggleTask: action,
            deleteTask: action,
            currentFilter: observable,
            setCurrentFilter: action,
            getCurrentFilteredTasks: action,
        })
    }

    setCurrentFilter(filter) {
        if (filter === 'all' || filter === 'remaining' || filter === 'finished') {
            this.currentFilter = filter;
        } else {
            throw new Error("Invalid argument");
        }
    }

    addTask(task) {
        this.todos.push(task)
    }

    toggleTask(todo) {
        todo.finished = !todo.finished
    }

    deleteTask(name) {
        this.todos = this.todos.filter((list) => list.title !== name)
    }

    getCurrentFilteredTasks() {
        let f = () => void 0;
        if( this.currentFilter === 'all') {
            f = () => true; // do not filter 
        } else if (this.currentFilter === 'remaining') {
            f = (todoValue) => todoValue.finished === false;
        } else {
            f = (todoValue) => todoValue.finished === true;
        }
        return this.todos.filter(f);
    }
}

export default TodoContainer
