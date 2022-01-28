import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import './SortSelector.scss'

import sortIMG from '../../img/sort.png'

function SortSelector() {
  let [showSortMenu, setShowSortMenu] = useState(false)

  function selectSort(e) {
    setShowSortMenu(false)
  }

  return (
    <div className="SortSelector">
      <MyButton
        onClick={() => setShowSortMenu(!showSortMenu)}
        style={{ backgroundImage: `url(${sortIMG})` }}
        title={'Выбрать сортировку'}
      />
      <div className="SortSelector__menu" hidden={!showSortMenu}>
        <MyButton onClick={selectSort}>По заголовку</MyButton>
        <MyButton onClick={selectSort}>По содержимому</MyButton>
        <MyButton onClick={selectSort}>По дате просмотра</MyButton>
        <MyButton onClick={selectSort}>По дате редактирования</MyButton>
      </div>
    </div>
  )
}

export default SortSelector
