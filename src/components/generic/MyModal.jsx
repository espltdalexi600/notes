import React from 'react'
import './MyModal.scss'

function MyModal({ onClick, children }) {
  return (
    <div className="MyModal" onClick={onClick}>
      <div className="MyModal__wrapper">{children}</div>
    </div>
  )
}

export default MyModal
