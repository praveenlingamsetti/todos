import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Todo from './components/TodoItem'
import DoneItem from './components/DoneItem'
import './App.css'

class App extends Component {
  state = {userInput: '', list: [], done: []}

  deleteTodo = id => {
    const {list} = this.state
    const filteredTodoList = list.filter(each => each.id !== id)

    this.setState({list: filteredTodoList})
  }

  deleteToDoDone = id => {
    const {done} = this.state
    const filteredDoneList = done.filter(each => each.id !== id)

    this.setState({done: filteredDoneList})
  }

  onCompleteTodo = id => {
    const {list} = this.state

    const filteredDone = list.filter(each => each.id === id)

    this.setState(prevState => ({
      done: [...prevState.done, ...filteredDone],
    }))
  }

  onchangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddTodo = event => {
    if (event.target.value !== '') {
      this.setState(prevState => ({
        list: [...prevState.list, {content: event.target.value, id: uuidv4()}],
      }))

      this.setState({userInput: ''})
    }
  }

  render() {
    const {userInput, list, done} = this.state

    return (
      <div className="todo-bg">
        <div className="todo-heading">
          <h1>TODOS</h1>
        </div>
        <div className="todo-elements">
          <h1 className="">Create Task</h1>
          <input
            className="input-element"
            placeholder="what needs to be done"
            onChange={this.onchangeInput}
            value={userInput}
            type="text"
          />
          <br />
          <button
            value={userInput}
            type="submit"
            className="add-button"
            onClick={this.onAddTodo}
          >
            ADD
          </button>
        </div>
        <div className="todo-container">
          <h1>Todo</h1>
          <ul className="list-items">
            {list.map(each => (
              <Todo
                details={each}
                key={each.id}
                onCompleteTodo={this.onCompleteTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
        <div className="done-container">
          <h1>completed</h1>
          <ul>
            {done.map(each => (
              <DoneItem
                details={each}
                key={each.id}
                deleteTodo={this.deleteTodoDone}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
