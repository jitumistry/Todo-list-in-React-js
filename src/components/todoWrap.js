import React from 'react'
import '../App.css'

export const TodoWrap = (props) => {

  return (
    <>
      <div className='delete'>
        <li> {props.text} <button onClick={() => {
          props.onSelect(props.id);
        }}><i className="fa-solid fa-x"></i></button></li>
        <hr />
      </div>
    </>
  )
}
