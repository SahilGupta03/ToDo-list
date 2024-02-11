import React, { useEffect, useState } from 'react'
import "./App.css"
import Todolist from './components/TodoList';
import ReactModal from 'react-modal';
function App() {
  const [listTodo, setListTodo] = useState([]);
  const [btnname, setbtnname] = useState('')

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [inputText, setInputText] = useState('');
  const [inputTexth, setInputTexth] = useState('');
  const [inputindex, setInputindex] = useState('');
  useEffect(() => {
    // Retrieving the string
    let retString = localStorage.getItem("key")

    // Retrieved array
    let retArray = JSON.parse(retString)
    console.log(retArray)
    setListTodo(retArray==null?[]:retArray)

  }, [])
  function addList(inputTexth, inputText) {
    if (btnname == "Update") {
      if (inputText !== '' && inputTexth !== '') {


        var arr = [...listTodo]
        let obj = { Heading: inputTexth, data: inputText };
        // arr.push(obj)
        arr.splice(inputindex, 1, obj)
        setListTodo(arr);
        let string = JSON.stringify(arr)
        localStorage.setItem("key", string)
        setInputText("")
        setInputTexth('')
        closeModal()
      } else {
        alert("please enter both value")
      }
    } else {
      if (inputText !== '' && inputTexth !== '') {


        var arr = [...listTodo]
        let obj = { Heading: inputTexth, data: inputText };
        arr.push(obj)
        setListTodo(arr);
        let string = JSON.stringify(arr)
        localStorage.setItem("key", string)
        setInputText("")
        setInputTexth('')
        closeModal()
      } else {
        alert("please enter both value")
      }
    }


  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo(newListTodo)
    let string = JSON.stringify(newListTodo)
    localStorage.setItem("key", string)
  }
  function openModal() {
    setIsOpen(true);
    setbtnname('Submit')
  }
  function closeModal() {
    setIsOpen(false);
  }
  function fncedit(item, index) {
    console.log(item, index)
    setInputindex(index)
    setIsOpen(true);
    setInputText(item.data)
    setInputTexth(item.Heading)
    setbtnname('Update')
  }

  return (
    <div className="main-container">
      <div className="center-container">

        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} openModal={openModal} fncedit={fncedit} />

          )

        })}


        <button style={{ position: 'absolute', bottom: 0, right: 0, margin: 10 }} onClick={openModal} className="add-btn">+</button>

      </div>

      <ReactModal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{marginBottom:10}}>Heading</h2>
        <input
          type='text'
          className="input-box-todoh"
          maxLength={20}
          value={inputTexth}
          onChange={e => setInputTexth(e.target.value)}
          placeholder="Enter Heading" />
        <h2>To Do</h2>
        <div className="input-container">

          <textarea
            type='text'
            id='data'
            className="input-box-todo"
            placeholder="Enter your todo"
            value={inputText}
            style={{padding:10}}
            onChange={e => {
              setInputText(e.target.value)
            }}
          />

        </div>
        <div style={{ display: 'flex ' }}>
          <button className="sub-btn"
            onClick={() => {
              // fncsub()
              addList(inputTexth, inputText)

            }}>{btnname}</button>
          <button className="sub-btn"
            onClick={() => {

              closeModal()

            }}>Close</button>
        </div>

      </ReactModal>
    </div>
  )
}

export default App