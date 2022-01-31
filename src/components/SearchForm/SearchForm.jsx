import React, { useState, useRef } from 'react'
import MyButton from '../MyButton/MyButton'
import './SearchForm.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
        <MyButton onClick={focusSearchForm} title={'Поиск'}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: '20px', color: '#4a4a4a' }}
          />
        </MyButton>
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
          <MyButton onClick={resetSearchForm} title={'Сбросить'}>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ fontSize: '20px', color: '#4a4a4a' }}
            />
          </MyButton>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
