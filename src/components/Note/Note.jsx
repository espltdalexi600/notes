import React from 'react'
import './Note.scss'

function Note({ note, openNote }) {
  return (
    <article onClick={() => openNote(note)} className="Note">
      {note.title.trim() && <h2 className="Note__title">{note.title}</h2>}
      {note.body.trim() && <p className="Note__body">{note.body}</p>}
    </article>
  )
}

export default Note
