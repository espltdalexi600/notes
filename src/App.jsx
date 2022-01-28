import React, { useState, useEffect, useMemo } from 'react'
import NoteList from './components/NoteList/NoteList'
import NewNote from './components/NewNote/NewNote'
import SearchForm from './components/SearchForm/SearchForm'
import SortSelector from './components/SortSelector/SortSelector'
import './App.scss'

function App() {
  const [notes, setNotes] = useState([])

  const [note, setNote] = useState({})

  const [sort, setSort] = useState('dateOfView')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const sortedNotes = useMemo(() => {
    if (notes.length < 2 || !sort) return notes

    if (sort === 'dateOfChange' || sort === 'dateOfView') {
      return [...notes].sort((a, b) =>
        new Date(a[sort]) > new Date(b[sort]) ? -1 : 1,
      )
    }

    return [...notes].sort((a, b) => a[sort].localeCompare(b[sort]))
  }, [notes, sort])

  const sortedAndSearchedNotes = useMemo(() => {
    let strSearch = search.trim()
    if (!strSearch) return sortedNotes
    return sortedNotes.filter(
      (item) => item.title.includes(strSearch) || item.body.includes(strSearch),
    )
  }, [search, sortedNotes])

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
        editable: true,
      })
    }
  }

  function addNote(note) {
    let result = notes.find((item) => item.id === note.id)
    const date = new Date().toJSON()

    if (result) {
      setNotes((notes) => {
        return notes.map((item) => {
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
              editable: note.editable,
            }
          } else {
            return item
          }
        })
      })
    } else {
      setNotes((notes) => {
        return [...notes, { ...note, dateOfChange: date, dateOfView: date }]
      })
    }
  }

  function deleteNote() {
    setNotes(notes.filter((item) => (item.id === note.id ? false : true)))
  }

  return (
    <div className="App">
      <header className="App__header">
        <SearchForm search={search} setSearch={setSearch} />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="title">По заголовку</option>
          <option value="body">По содержимому</option>
          <option value="dateOfView">По дате просмотра</option>
          <option value="dateOfChange">По дате изменения</option>
        </select>
        <SortSelector />
      </header>
      {sortedNotes.length ? (
        <NoteList notes={sortedAndSearchedNotes} openNote={openNote} />
      ) : (
        <h2>Нет заметок</h2>
      )}
      {note.id && (
        <NewNote
          note={note}
          addNote={addNote}
          setNote={setNote}
          deleteNote={deleteNote}
        />
      )}
      <button className="App__bt-addNote" onClick={openNote}></button>
    </div>
  )
}

export default App
