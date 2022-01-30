import React from 'react'
import SortSelector from '../SortSelector/SortSelector'
import MyButton from '../MyButton/MyButton'
import './SettingsPanel.scss'

import tableIMG from '../../img/table.png'
import listIMG from '../../img/list.png'

function SettingsPanel({ view, setView, sort, setSort }) {
  return (
    <div className="SettingsPanel">
      <div className="SettingsPanel__title">Заметки</div>
      <div className="SettingsPanel__settings">
        {view === 'list' && (
          <MyButton
            style={{ backgroundImage: `url(${tableIMG})` }}
            onClick={() => setView('table')}
            title="Таблица"
          />
        )}
        {view === 'table' && (
          <MyButton
            style={{ backgroundImage: `url(${listIMG})` }}
            onClick={() => setView('list')}
            title="Список"
          />
        )}
        <SortSelector sort={sort} setSort={setSort} />
      </div>
    </div>
  )
}

export default SettingsPanel
