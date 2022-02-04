import React from 'react'
import './MyButton.scss'

function MyButton({ children, ...props }) {
  return (
    <button className="MyButton" {...props}>
      {children}
    </button>
  )
}

export default MyButton
