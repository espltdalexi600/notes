import React, { useState } from 'react'
import MyButton from '../generic/MyButton'
import CheckMark from '../generic/CheckMark'
import './SortSelector.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'

function SortSelector({ sort, setSort }) {
  let [showSortMenu, setShowSortMenu] = useState(false)

  function selectSort(e) {
    setSort(e.target.dataset.option)
    setShowSortMenu(false)
  }

  return (
    <div className="SortSelector" onMouseLeave={() => setShowSortMenu(false)}>
      <MyButton
        onClick={() => setShowSortMenu(!showSortMenu)}
        title={'Выбрать сортировку'}
      >
        <FontAwesomeIcon
          icon={faSortAmountDownAlt}
          style={{ fontSize: '20px', color: '#4a4a4a' }}
        />
      </MyButton>
      <div className="SortSelector__space" hidden={!showSortMenu}></div>
      <div className="SortSelector__menu" hidden={!showSortMenu}>
        <MyButton data-option="title" onClick={selectSort}>
          {sort === 'title' ? <CheckMark /> : ''}По заголовку
        </MyButton>
        <MyButton data-option="body" onClick={selectSort}>
          {sort === 'body' ? <CheckMark /> : ''}По содержимому
        </MyButton>
        <MyButton data-option="dateOfView" onClick={selectSort}>
          {sort === 'dateOfView' ? <CheckMark /> : ''}По дате просмотра
        </MyButton>
        <MyButton data-option="dateOfChange" onClick={selectSort}>
          {sort === 'dateOfChange' ? <CheckMark /> : ''}По дате редактирования
        </MyButton>
      </div>
    </div>
  )
}

export default SortSelector
