import React, { useState, useEffect } from 'react'
import { useNotes } from './hooks/useNotes'
import NoteList from './components/NoteList/NoteList'
import NewNote from './components/NewNote/NewNote'
import SearchForm from './components/SearchForm/SearchForm'
import SettingsPanel from './components/SettingsPanel/SettingsPanel'
import MyButton from './components/generic/MyButton'
import MyModal from './components/generic/MyModal'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({})
  const [sort, setSort] = useState('dateOfView')
  const [search, setSearch] = useState('')
  const [view, setView] = useState('table')

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')) || [])
    setSort(JSON.parse(localStorage.getItem('sort')) || 'dateOfView')
    setView(JSON.parse(localStorage.getItem('view')) || 'table')
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('sort', JSON.stringify(sort))
  }, [sort])

  useEffect(() => {
    localStorage.setItem('view', JSON.stringify(view))
  }, [view])

  const sortedAndSearchedNotes = useNotes(notes, sort, search.trim())

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
        background: 'transparent',
        archived: false,
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
              background: note.background,
              archived: note.archived,
            }
          } else {
            return item
          }
        })
      })
    } else {
      setNotes((notes) => {
        return [
          ...notes,
          {
            ...note,
            title: note.title.trim(),
            body: note.body.trim(),
            dateOfChange: date,
            dateOfView: date,
          },
        ]
      })
    }
  }

  function closeNote(e) {
    if (
      e.target.className === 'MyModal' ||
      e.currentTarget.title === '??????????????'
    ) {
      addNote(note)
      setNote({})
    }
  }

  function deleteNote() {
    setNotes(notes.filter((item) => (item.id === note.id ? false : true)))
  }

  return (
    <div className="App">
      <header className="App__header">
        <SearchForm search={search} setSearch={setSearch} />
      </header>
      <div>
        <SettingsPanel
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
        />
        {sortedAndSearchedNotes.length ? (
          <NoteList
            notes={sortedAndSearchedNotes}
            openNote={openNote}
            view={view}
            search={search.trim()}
          />
        ) : (
          <h2>?????????????? ???? ??????????????</h2>
        )}
      </div>
      {note.id && (
        <MyModal onClick={closeNote}>
          <NewNote
            note={note}
            addNote={addNote}
            setNote={setNote}
            closeNote={closeNote}
            deleteNote={deleteNote}
          />
        </MyModal>
      )}
      <div className="App__bt-addNote-wrapper">
        <MyButton
          onClick={openNote}
          style={{ height: '45px', width: '45px' }}
          title={'?????????? ??????????????'}
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: '30px', color: '#4a4a4a' }}
          />
        </MyButton>
      </div>
    </div>
  )
}

export default App
