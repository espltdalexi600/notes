import React from 'react'
import Highlight from './Highlight'
import './Note.scss'

function Note({ note, openNote, search }) {
  function checkHigh(note) {
    let length = note.title.length + note.body.length
    return length > 100 ? true : false
  }

  return (
    <article
      onClick={() => openNote(note)}
      className={checkHigh(note) ? 'Note Note--high' : 'Note'}
      style={{
        backgroundColor: note.background,
        borderColor:
          note.background === 'rgba(0, 0, 0, 0)'
            ? 'rgba(0, 0, 0, 0.2)'
            : note.background,
      }}
    >
      {note.title && (
        <h2 className="Note__title">
          <Highlight str={note.title} search={search} />
        </h2>
      )}
      {note.body && (
        <p className="Note__body">
          <Highlight str={note.body} search={search} />
        </p>
      )}
      {note.title === '' && note.body === '' && (
        <h2 className="Note__message">Пустая заметка</h2>
      )}
    </article>
  )
}

export default Note
