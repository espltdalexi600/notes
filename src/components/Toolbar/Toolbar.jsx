import React from 'react'
import MyButton from '../MyButton/MyButton'
import './Toolbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

function Toolbar({
  closeNote,
  copyNote,
  deleteNote,
  changeEditable,
  changeShowingColPalet,
}) {
  return (
    <div className="Toolbar">
      <MyButton onClick={changeShowingColPalet} title={'Параметры фона'}>
        <FontAwesomeIcon
          icon={faPalette}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <MyButton onClick={changeEditable} title={'Запрет редактирования'}>
        <FontAwesomeIcon
          icon={faEdit}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <MyButton title={'В архив'}>
        <FontAwesomeIcon
          icon={faArchive}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <MyButton onClick={copyNote} title={'Копировать'}>
        <FontAwesomeIcon
          icon={faCopy}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <MyButton onClick={deleteNote} title={'Удалить'}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <MyButton onClick={closeNote} title={'Закрыть'}>
        <FontAwesomeIcon
          icon={faWindowClose}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
    </div>
  )
}

export default Toolbar
