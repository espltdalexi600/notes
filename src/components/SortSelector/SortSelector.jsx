import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import CheckMark from '../CheckMark/CheckMark'
import './SortSelector.scss'

import sortIMG from '../../img/sort.png'

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
        style={{ backgroundImage: `url(${sortIMG})` }}
        title={'Выбрать сортировку'}
      />
      <div className="SortSelector__space"></div>
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
