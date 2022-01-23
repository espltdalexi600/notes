import React from 'react'
import Note from '../Note/Note'

import './NoteList.scss'

function NoteList({ notes, openNote }) {
  return (
    <div>
      <main className="NoteList">
        {notes.map((note) => (
          <Note key={note.id} note={note} openNote={openNote} />
        ))}
      </main>
    </div>
  )
}

export default NoteList
