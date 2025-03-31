import { useState } from "react";
import "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const changeFunction = (event) => {
    // console.log(event);
    // console.log(event.nativeEvent.data);
    // console.log(todoName);
    setTodoName(todoName + event.nativeEvent.data);
  };

  const changeDate = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const onButtonClick = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          classNameName="myclassName"
          type="text"
          placeholder="Enter Todo Here"
          onChange={(event) => changeFunction(event)}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          onChange={(event) => changeDate(event)}
          value={dueDate}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success an-button"
          onClick={onButtonClick}
        >
          Success
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
