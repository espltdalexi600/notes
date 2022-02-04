import React from 'react'
import MyButton from '../generic/MyButton'
import './СolorPalette.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTintSlash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function СolorPalette({ background, onClick }) {
  return (
    <ul className="СolorPalette">
      <li>
        <MyButton
          onClick={onClick}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '50%' }}
        >
          <FontAwesomeIcon
            icon={faTintSlash}
            style={{ fontSize: '15px', color: '#4a4a4a' }}
          />
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(242, 139, 130)',
            borderRadius: '50%',
          }}
        >
          {background === 'rgb(242, 139, 130)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{ backgroundColor: 'rgb(251, 188, 4)', borderRadius: '50%' }}
        >
          {' '}
          {background === 'rgb(251, 188, 4)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(255, 244, 117)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(255, 244, 117)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(204, 255, 144)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(204, 255, 144)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(167, 255, 235)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(167, 255, 235)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(203, 240, 248)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(203, 240, 248)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(174, 203, 250)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(174, 203, 250)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(215, 174, 251)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(215, 174, 251)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(253, 207, 232)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(253, 207, 232)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(230, 201, 168)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(230, 201, 168)' && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: '15px', color: '#4a4a4a' }}
            />
          )}
        </MyButton>
      </li>
      <li>
        <MyButton
          onClick={onClick}
          style={{
            backgroundColor: 'rgb(232, 234, 237)',
            borderRadius: '50%',
          }}
        >
          {' '}
          {background === 'rgb(232, 234, 237)' && (
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
