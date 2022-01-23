import React from 'react'
import './Note.scss'

function Note({ note, openNote }) {
  return (
    <article onClick={() => openNote(note)} className="Note">
      {note.title && <h2 className="Note__title">{note.title}</h2>}
      {note.body && <p className="Note__body">{note.body}</p>}
      {note.title === '' && note.body === '' && (
        <h2 className="Note__message">Пустая заметка</h2>
      )}
    </article>
  )
}

export default Note
