import React from 'react'
import './Note.scss'

function Note({ note, openNote }) {
  function checkHigh(note) {
    let length = note.title.length + note.body.length
    return length > 100 ? true : false
  }
  return (
    <article
      onClick={() => openNote(note)}
      className={checkHigh(note) ? 'Note Note--high' : 'Note'}
    >
      {note.title && <h2 className="Note__title">{note.title}</h2>}
      {note.body && <p className="Note__body">{note.body}</p>}
      {note.title === '' && note.body === '' && (
        <h2 className="Note__message">Пустая заметка</h2>
      )}
    </article>
  )
}

export default Note
