import React from 'react'
import MyButton from '../generic/MyButton'
import './СolorPalette.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTintSlash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function СolorPalette({ background, onClick }) {
  return (
    <ul className="СolorPalette">
      <li className="СolorPalette__circle СolorPalette__circle--transparent">
        <MyButton onClick={onClick} data-background="transparent">
          <FontAwesomeIcon
            icon={faTintSlash}
            style={{ fontSize: '15px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--moderate-pink">
        <MyButton onClick={onClick} data-background="moderate-pink">
          {background === 'moderate-pink' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--choice-yellow">
        <MyButton onClick={onClick} data-background="choice-yellow">
          {background === 'choice-yellow' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--unripe-yellow">
        <MyButton onClick={onClick} data-background="unripe-yellow">
          {background === 'unripe-yellow' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--light-green">
        <MyButton onClick={onClick} data-background="light-green">
          {background === 'light-green' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--pang">
        <MyButton onClick={onClick} data-background="circle--pang">
          {background === 'pang' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--snow-blue">
        <MyButton onClick={onClick} data-background="snow-blue">
          {background === 'snow-blue' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--blue-frost">
        <MyButton onClick={onClick} data-background="blue-frost">
          {background === 'blue-frost' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--bright-lilac">
        <MyButton onClick={onClick} data-background="bright-lilac">
          {background === 'bright-lilac' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--pink-pig">
        <MyButton onClick={onClick} data-background="pink-pig">
          {background === 'pink-pig' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--zinnwaldite">
        <MyButton onClick={onClick} data-background="zinnwaldite">
          {background === 'zinnwaldite' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li className="СolorPalette__circle СolorPalette__circle--pale-gray">
        <MyButton onClick={onClick} data-background="pale-gray">
          {background === 'pale-gray' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
    </ul>
  )
}

export default СolorPalette
