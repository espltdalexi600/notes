import React, { useState, useRef } from 'react'
import MyButton from '../MyButton/MyButton'
import './SearchForm.scss'

import searchIMG from '../../img/search.png'
import resetIMG from '../../img/close.png'

function SearchForm({ search, setSearch }) {
  let [focusForm, setfocusForm] = useState(false)

  const searchInputRef = useRef()

  function focusSearchForm(e) {
    e.preventDefault()
    searchInputRef.current.focus()
  }

  function resetSearchForm(e) {
    e.preventDefault()
    setSearch('')
    searchInputRef.current.focus()
  }

  return (
    <form className={focusForm ? 'SearchForm SearchForm--focus' : 'SearchForm'}>
      <div className="SearchForm__bt-wrapper">
        <MyButton
          onClick={focusSearchForm}
          style={{ backgroundImage: `url(${searchIMG})` }}
          title={'Поиск'}
        />
      </div>
      <input
        value={search}
        ref={searchInputRef}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setfocusForm(true)}
        onBlur={() => setfocusForm(false)}
        placeholder="Поиск"
        className="SearchForm__input"
        type="text"
      />
      <div className="SearchForm__bt-wrapper">
        <div hidden={!search}>
          <MyButton
            onClick={resetSearchForm}
            style={{ backgroundImage: `url(${resetIMG})` }}
            title={'Сбросить'}
          />
        </div>
      </div>
    </form>
  )
}

export default SearchForm
