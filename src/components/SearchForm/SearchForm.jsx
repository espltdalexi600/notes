import React, { useState } from 'react'
import './SearchForm.scss'

function SearchForm() {
  let [focusForm, setfocusForm] = useState(false)

  return (
    <form className={focusForm ? 'SearchForm SearchForm--focus' : 'SearchForm'}>
      <input
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
