import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const Todo = props => {
  const {details, deleteTodo, onCompleteTodo} = props
  const {content, id} = details

  const onDelete = () => {
    deleteTodo(id)
  }
  const onComplete = () => {
    onCompleteTodo(id)
  }

  return (
    <li className="todo-item">
      <h1>{content}</h1>
      <div className="button-items">
        <AiFillDelete onClick={onDelete} className="delete-icon" />

        <button onClick={onComplete} className="done-button" type="button">
          Done
        </button>
      </div>
    </li>
  )
}
export default Todo
