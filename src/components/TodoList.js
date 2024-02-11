import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item" >
      {console.log(props.item)} {props.item.Heading}
      <span className='icons'>
        <img src='edit.png' alt='d' style={{ width: 20, height: 20,marginRight:5 }} onClick={() =>
          props.fncedit(props.item, props.index)}
        />
        <img src='delete.png' alt='d' style={{ width: 20, height: 20 }} onClick={e => {
          props.deleteItem(props.index)
        }} />

      </span>
    </li>



  )
}

export default Todolist