import React from 'react'
import Note from '../Note/Note'

import './NoteList.scss'

function NoteList({ notes, openNote, view, search }) {
  return (
    <main
      className={
        view === 'table'
          ? 'NoteList NoteList--inTable'
          : 'NoteList NoteList--inList'
      }
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} openNote={openNote} search={search} />
      ))}
    </main>
  )
}

export default NoteList
