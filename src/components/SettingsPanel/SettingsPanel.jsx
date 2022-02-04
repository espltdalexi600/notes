import React from 'react'
import SortSelector from './SortSelector'
import MyButton from '../generic/MyButton'
import './SettingsPanel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals } from '@fortawesome/free-solid-svg-icons'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

function SettingsPanel({ view, setView, sort, setSort }) {
  return (
    <div className="SettingsPanel">
      <div className="SettingsPanel__title">Заметки</div>
      <div className="SettingsPanel__settings">
        {view === 'list' && (
          <MyButton onClick={() => setView('table')} title="Таблица">
            <FontAwesomeIcon
              icon={faThLarge}
              style={{ fontSize: '20px', color: '#4a4a4a' }}
            />
          </MyButton>
        )}
        {view === 'table' && (
          <MyButton onClick={() => setView('list')} title="Список">
            <FontAwesomeIcon
              icon={faEquals}
              style={{ fontSize: '20px', color: '#4a4a4a' }}
            />
          </MyButton>
        )}
        <SortSelector sort={sort} setSort={setSort} />
      </div>
    </div>
  )
}

export default SettingsPanel
