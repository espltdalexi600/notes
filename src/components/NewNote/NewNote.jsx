import React, { useState, useEffect, useRef } from 'react'
import Toolbar from './Toolbar'
import ColorPalette from './СolorPalette'
import { resizeTextarea } from '../../lib/resixeTextarea'
import { getDateOFChange } from '../../lib/getDateOFChange'
import './NewNote.scss'

function NewNote({ note, setNote, addNote, deleteNote }) {
  const [showColPalet, setShowColPalet] = useState(false)

  const titleRef = useRef()
  const bodyRef = useRef()

  useEffect(() => {
    resizeTextarea(titleRef.current)
  }, [note.title])

  useEffect(() => {
    resizeTextarea(bodyRef.current)
  }, [note.body])

  function closeNote(e) {
    if (
      e.target.className === 'NewNote' ||
      e.currentTarget.title === 'Закрыть'
    ) {
      addNote(note)
      setNote({})
    }
  }

  function copyNote() {
    addNote(note)
    addNote({ ...note, id: Date.now() })
    setNote({})
  }

  function deleteThisNote() {
    let result = window.confirm(
      'Вы действительно хотите удалить заметку? Восстановление будет невозможно.',
    )
    if (!result) return
    deleteNote(note.id)
    setNote({})
  }

  function changeBackground(e) {
    setNote({
      ...note,
      background: e.currentTarget.dataset.background,
    })
    setShowColPalet(false)
  }

  return (
    <div onMouseDown={closeNote} className="NewNote">
      <div className="NewNote__wrapper">
        <div className={`NewNote__shield NewNote__shield--${note.background}`}>
          <form className="NewNote__form">
            <textarea
              disabled={!note.editable}
              ref={titleRef}
              className="NewNote__title"
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              placeholder="Введите заголовок"
              value={note.title}
            ></textarea>
            <textarea
              disabled={!note.editable}
              autoFocus={note.body === '' ? true : false}
              ref={bodyRef}
              className="NewNote__body"
              onChange={(e) => setNote({ ...note, body: e.target.value })}
              placeholder="Текст заметки"
              value={note.body}
            ></textarea>
            {note.dateOfChange && (
              <div className="NewNote__date">
                {getDateOFChange(note.dateOfChange)}
              </div>
            )}
          </form>
          <div className="NewNote__footer">
            {showColPalet && (
              <ColorPalette
                background={note.background}
                onClick={changeBackground}
              />
            )}
            <Toolbar
              note={note}
              closeNote={closeNote}
              copyNote={copyNote}
              deleteNote={deleteThisNote}
              changeEditable={() =>
                setNote({ ...note, editable: !note.editable })
              }
              changeShowingColPalet={() => {
                setShowColPalet(!showColPalet)
              }}
              archive={() => setNote({ ...note, archived: !note.archived })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewNote
