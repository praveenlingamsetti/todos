import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const DoneItem = props => {
  const {details, deleteTodo} = props
  const {content, id} = details

  const onDeleteDone = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <h1>{content}</h1>
      <div className="button-items">
        <AiFillDelete
          type="button"
          onClick={onDeleteDone}
          className="delete-icon"
        />
      </div>
    </li>
  )
}
export default DoneItem
