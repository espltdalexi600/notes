import React, { useEffect, useRef } from 'react'
import './NewNote.scss'

function NewNote({ note, addNote, setTitle, setBody }) {
  const titleRef = useRef()
  const bodyRef = useRef()

  useEffect(() => {
    resizeTextarea(titleRef.current)
    resizeTextarea(bodyRef.current)
  }, [])

  function closeNote(e) {
    if (e.target.className !== 'NewNote') return
    addNote()
  }

  function changeTitle(e) {
    setTitle(e)
    resizeTextarea(e.target)
  }

  function changeBody(e) {
    setBody(e)
    resizeTextarea(e.target)
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
            onChange={changeTitle}
            placeholder="Введите заголовок"
            value={note.title}
          ></textarea>
          <textarea
            autoFocus
            ref={bodyRef}
            className="NewNote__body"
            onChange={changeBody}
            placeholder="Текст заметки"
            value={note.body}
          ></textarea>
        </form>
      </div>
    </div>
  )
}

export default NewNote
