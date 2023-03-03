import React, { useState } from "react";
import "./mitodo.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState();
  const [edit, setEdit] = useState(false);
  const [idx, setIdx] = useState(null);
  const [mainArray,setMainArray] = useState([]);

  const onAddBtn = () => {
    if (inputvalue && !edit) {
      let temp = [...mainArray];
      temp.push({ id: Math.random(), title: inputvalue, checked: false });
      setMainArray([...temp]);
      setTasks([...temp]);
      setInputValue("");
    } else{
      let temp=[...mainArray];
      temp.splice(idx,1,{ id: Math.random(), title: inputvalue, checked: false })
      setMainArray([...temp]);
      setTasks([...temp]);
      setInputValue('');
      setEdit(false);
    }
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onDone = (i) => {
    let temp = [...mainArray];
    temp.map((item, idx) => {
      if (i === idx) {
        item.checked = true;
      }
      setMainArray([...temp]);
      setTasks([...temp]);
    });
  };

  const onEdit = (item, i) => {
    setEdit(true);
    setInputValue(item.title);
    setIdx(i);
  };

  const onDelete = (i) => {
    let temp = [...mainArray];
    temp.splice(i, 1);
    setMainArray([...temp]);
    setTasks([...temp]);
  };

  const onTaskDelete =()=>{
    let temp=[...mainArray];
    let filtered=temp.filter((item)=>{
      return(!item.checked)   
    })
    setMainArray([...filtered]);
    setTasks([...filtered]);
  };

  const onDeleteAll =()=>{
    setMainArray([]);
    setTasks([]);
  };

  const onShowAll = ()=>{
    let temp=[...mainArray];
    let filtered=temp.filter((item)=>{
      return(item)
    })
    setTasks([...filtered]);
  };

  const onShowDone = () => {
    let temp=[...mainArray];
    let filtered=temp.filter((item)=>{
      return(item.checked)
    })
    setTasks([...filtered]);
  };

  const onShowTodo = () => {
    let temp=[...mainArray];
    let filtered=temp.filter((item)=>{
      return(!item.checked)
    })
    setTasks([...filtered]);
  };

  return (
    <div className="main-div">
      <h2> Todo-Input</h2>
      <div className="todo-input">
        <input
          onChange={onInputChange}
          placeholder="New Todo"
          value={inputvalue}
        ></input>{" "}
        <br />
        <button onClick={onAddBtn} className="add-btn">
          {" "}
          Add new task
        </button>
      </div>

      <div className="todo-list">
        <h2> Todo-List</h2>
        <div className="btn-3">
          <button onClick={onShowAll}> All</button>
          <button onClick={onShowDone}> Done</button>
          <button onClick={onShowTodo}> Todo</button>
        </div>
      </div>

      <div>
        <div className="lists">
          <table>
            <tbody>
              {tasks.map((item, i) => {
                return (

                  <div className="table-row">
                    <div className={item.checked ?"task-name": "task-before"}> {item?.title}</div>

                    <div className="buttons">
                      <button className="done" onClick={onDone.bind(this, i)}>
                        {" "}
                        <FaCheck />
                      </button>
                      <button className="edit" onClick={onEdit.bind(this,item,i)}>
                        {" "}
                        <FaPen />
                      </button>
                      <button
                        className="delete"
                        onClick={onDelete.bind(this, i)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="btn">
        <button onClick={onTaskDelete}> Delete done tasks</button>
        <button onClick={onDeleteAll}> Delete all tasks</button>
      </div>
    </div>
  );
}

export default Todo;
