import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import "./App.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([]);
  // const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = (event) => {
    event.preventDefault();
    const currentTask = inputTask.current.value;
    console.log(currentTask);
    if (!todos.includes(currentTask)) {
      // setTodos([...todos, { task: currentTask, completed: false }]);
      setTodos([...todos, currentTask]);
      inputTask.current.value = "";
      console.log(todos);
    } else {
      return alert("Task Already Registered");
    }
  };
  const deleteTask = (tasktodelete) => {
    setTodos(
      todos.filter((task) => {
        return task !== tasktodelete;
      })
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="form">
        <form>
          <input
            ref={inputTask}
            type="text"
            placeholder="Place Your Task Here ..."
          />
          <button onClick={addTask}>Add Task</button>
        </form>
      </div>
      <hr />
      <div className="todo-list">
        {todos.map((val, key) => {
          return (
            <p key={key}>
              <span className="value">{val}</span>
              <span className="icon">
                <span className="delete-icon" onClick={() => deleteTask(val)}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span className="done-icon">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
