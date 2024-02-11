import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="input-container">
      <textarea
        type='text'
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e => {
          setInputText(e.target.value)
        }}
      />
      <button className="add-btn"
        onClick={() => {
          props.addList(inputText)
          setInputText("")
          props.closeModal()
        }}>+</button>
    </div>
  );
}

export default TodoInput;
