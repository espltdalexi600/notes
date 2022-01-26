import React from 'react'
import './Toolbar.scss'

function Toolbar({ closeNote, copyNote, deleteNote, changeEditable }) {
  return (
    <div className="Toolbar">
      <button
        className="Toolbar__bt Toolbar__bt--edit"
        title="Запрет редактирования"
        onClick={changeEditable}
      ></button>
      <button
        className="Toolbar__bt Toolbar__bt--archive"
        title="В архив"
      ></button>
      <button
        className="Toolbar__bt Toolbar__bt--copy"
        title="Дублировать"
        onClick={copyNote}
      ></button>
      <button
        className="Toolbar__bt Toolbar__bt--delete"
        title="Удалить"
        onClick={deleteNote}
      ></button>
      <button
        className="Toolbar__bt Toolbar__bt--close"
        title="Закрыть"
        onClick={closeNote}
      ></button>
    </div>
  )
}

export default Toolbar
