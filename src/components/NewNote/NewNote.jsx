import React, { useEffect, useRef } from 'react'
import './NewNote.scss'

function NewNote({ note, addNote, setTitle, setBody }) {
  const titleRef = useRef()
  const bodyRef = useRef()

  useEffect(() => {
    resizeTextarea(titleRef.current)
  }, [note.title])

  useEffect(() => {
    resizeTextarea(bodyRef.current)
  }, [note.body])

  function closeNote(e) {
    if (e.target.className !== 'NewNote') return
    addNote()
  }

  function resizeTextarea(elem) {
    let str = getComputedStyle(elem).lineHeight
    let lineHeight = Number(str.slice(0, str.length - 2))
    elem.style.height = lineHeight + 'px'

    let scroll = elem.scrollHeight
    elem.style.height = scroll + 5 + 'px'
  }

  return (
    <div onMouseDown={closeNote} className="NewNote">
      <div className="NewNote__wrapper">
        <form className="NewNote__form">
          <textarea
            ref={titleRef}
            className="NewNote__title"
            onChange={(e) => setTitle(e)}
            placeholder="Введите заголовок"
            value={note.title}
          ></textarea>
          <textarea
            autoFocus={note.body === '' ? true : false}
            ref={bodyRef}
            className="NewNote__body"
            onChange={(e) => setBody(e)}
            placeholder="Текст заметки"
            value={note.body}
          ></textarea>
        </form>
      </div>
    </div>
  )
}

export default NewNote
