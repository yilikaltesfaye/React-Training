import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import "./App.css";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([]);
  // const [currentTask, setCurrentTask] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

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

  const toggleCompleteTask = (task) => {
    if (completedTodos.includes(task)) {
      setCompletedTodos(completedTodos.filter((t) => t !== task)); // Remove if already completed
    } else {
      setCompletedTodos([...completedTodos, task]); // Add to completed if not already
    }
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
        {todos.map((val, key) => (
          <p
            key={key}
            className={completedTodos.includes(val) ? "completed" : ""}
          >
            <span className="value">{val}</span>
            <span className="icon">
              <span className="delete-icon" onClick={() => deleteTask(val)}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span
                className="done-icon"
                onClick={() => toggleCompleteTask(val)}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
