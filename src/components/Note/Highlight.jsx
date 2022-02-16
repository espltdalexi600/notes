import React from 'react'
import './Highlight.scss'

function Highlight({ str, search }) {
  if (!search) return <>{str}</>

  const regexp = new RegExp(search, 'ig')
  const findedSubstr = str.match(regexp)

  return (
    <>
      {str.split(regexp).map((item, index, array) => {
        if (index < array.length - 1) {
          const substr = findedSubstr.shift()
          return (
            <span key={index}>
              {item}
              <span className="Highlight">{substr}</span>
            </span>
          )
        }
        return <span key={index}>{item}</span>
      })}
    </>
  )
}

export default Highlight
