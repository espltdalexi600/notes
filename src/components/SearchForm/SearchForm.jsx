import React, { useState, useRef } from 'react'
import './SearchForm.scss'

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
        <button
          className="SearchForm__bt SearchForm__bt--search"
          onClick={focusSearchForm}
        ></button>
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
        <button
          hidden={!search}
          className="SearchForm__bt SearchForm__bt--reset"
          onClick={resetSearchForm}
        ></button>
      </div>
    </form>
  )
}

export default SearchForm
