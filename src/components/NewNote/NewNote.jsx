import React, { useState, useEffect, useRef } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import ColorPalette from '../СolorPalette/СolorPalette'
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
    if (e.target.className === 'NewNote') {
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

  function resizeTextarea(elem) {
    let str = getComputedStyle(elem).lineHeight
    let lineHeight = Number(str.slice(0, str.length - 2))
    elem.style.height = lineHeight + 'px'

    let scroll = elem.scrollHeight
    elem.style.height = scroll + 5 + 'px'
  }

  function getDateOFChange(str) {
    let date = new Date(str)
    return `Изменено: ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`
  }

  return (
    <div onMouseDown={closeNote} className="NewNote">
      <div className="NewNote__wrapper">
        <div
          className="NewNote__shield"
          style={{ backgroundColor: note.background }}
        >
          <div className="NewNote__form-wrapper">
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
          </div>
          <div className="NewNote__footer">
            {showColPalet && (
              <ColorPalette
                background={note.background}
                onClick={(e) =>
                  setNote({
                    ...note,
                    background: e.currentTarget.style.backgroundColor,
                  })
                }
              />
            )}
            <Toolbar
              closeNote={closeNote}
              copyNote={copyNote}
              deleteNote={deleteThisNote}
              changeEditable={() =>
                setNote({ ...note, editable: !note.editable })
              }
              changeShowingColPalet={() => {
                setShowColPalet(!showColPalet)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewNote
