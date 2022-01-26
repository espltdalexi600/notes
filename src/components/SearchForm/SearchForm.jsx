import React, { useState } from 'react'
import './SearchForm.scss'

function SearchForm({ search, setSearch }) {
  let [focusForm, setfocusForm] = useState(false)

  return (
    <form className={focusForm ? 'SearchForm SearchForm--focus' : 'SearchForm'}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setfocusForm(true)}
        onBlur={() => setfocusForm(false)}
        placeholder="Поиск"
        className="SearchForm__input"
        type="text"
      />
    </form>
  )
}

export default SearchForm
