import React from 'react'
import MyButton from '../generic/MyButton'
import './Toolbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

function Toolbar({
  note,
  closeNote,
  copyNote,
  deleteNote,
  changeEditable,
  changeShowingColPalet,
  archive,
}) {
  return (
    <ul className="Toolbar">
      <li>
        <MyButton onClick={changeShowingColPalet} title={'Параметры фона'}>
          <FontAwesomeIcon
            icon={faPalette}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li
        style={{
          border: `1px solid rgba(0, 0, 0, ${note.editable ? '0' : '0.2'})`,
        }}
      >
        <MyButton onClick={changeEditable} title={'Запрет редактирования'}>
          <FontAwesomeIcon
            icon={faEdit}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li
        style={{
          border: `1px solid rgba(0, 0, 0, ${note.archived ? '0.2' : '0'})`,
        }}
      >
        <MyButton onClick={archive} title={'В архив'}>
          <FontAwesomeIcon
            icon={faArchive}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li>
        <MyButton onClick={copyNote} title={'Копировать'}>
          <FontAwesomeIcon
            icon={faCopy}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li>
        <MyButton onClick={deleteNote} title={'Удалить'}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li>
        <MyButton onClick={closeNote} title={'Закрыть'}>
          <FontAwesomeIcon
            icon={faWindowClose}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
    </ul>
  )
}

export default Toolbar
