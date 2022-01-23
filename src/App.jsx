import React, { useState, useEffect } from 'react'
import NoteList from './components/NoteList/NoteList'
import NewNote from './components/NewNote/NewNote'
import SearchForm from './components/SearchForm/SearchForm'
import './App.scss'

function App() {
  const [notes, setNotes] = useState([])

  const [note, setNote] = useState({
    id: '',
    title: '',
    body: '',
    dateOfChange: '',
  })

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  function setTitle(e) {
    setNote({ ...note, title: e.target.value })
  }

  function setBody(e) {
    setNote({ ...note, body: e.target.value })
  }

  function openNote(note) {
    if (note.id) {
      setNote(note)
    } else {
      setNote({
        id: Date.now(),
        title: '',
        body: '',
        dateOfChange: '',
        dateOfView: '',
      })
    }
  }

  function addNote() {
    let result = notes.find((item) => item.id === note.id)
    const date = new Date()

    if (result) {
      setNotes(
        notes.map((item) => {
          if (item.id === note.id) {
            return {
              id: item.id,
              title: note.title.trim(),
              body: note.body.trim(),
              dateOfChange:
                item.title !== note.title || item.body !== note.body
                  ? date
                  : item.dateOfChange,
              dateOfView: date,
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setNotes([...notes, { ...note, dateOfChange: date, dateOfView: date }])
    }
    setNote({ id: '', title: '', body: '', dateOfChange: '', dateOfView: '' })
  }

  return (
    <div className="App">
      <header className="App__header">
        <SearchForm />
      </header>
      {notes.length ? (
        <NoteList notes={notes} openNote={openNote} />
      ) : (
        <h2>Нет заметок</h2>
      )}
      {note.id && (
        <NewNote
          note={note}
          addNote={addNote}
          setTitle={setTitle}
          setBody={setBody}
        />
      )}
      <button onClick={openNote}>Add note</button>
    </div>
  )
}

export default App
