import React from 'react'
import MyButton from '../MyButton/MyButton'
import './Toolbar.scss'

// import archiveIMG from '../../img/archive.svg'
import closeIMG from '../../img/close.png'
import copyIMG from '../../img/copy.png'
import deleteIMG from '../../img/delete.png'
import editIMG from '../../img/edit.png'

function Toolbar({ closeNote, copyNote, deleteNote, changeEditable }) {
  return (
    <div className="Toolbar">
      <MyButton
        onClick={changeEditable}
        style={{ backgroundImage: `url(${editIMG})` }}
        img={editIMG}
        title={'Запрет редактирования'}
      />
      {/* <MyButton img={archiveIMG} title="В архив" /> */}
      <MyButton
        onClick={copyNote}
        style={{ backgroundImage: `url(${copyIMG})` }}
        title={'Копировать'}
      />
      <MyButton
        onClick={deleteNote}
        style={{ backgroundImage: `url(${deleteIMG})` }}
        title={'Удалить'}
      />
      <MyButton
        onClick={closeNote}
        style={{ backgroundImage: `url(${closeIMG})` }}
        title={'Закрыть'}
      />
    </div>
  )
}

export default Toolbar
