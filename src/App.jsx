import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todo, setToDo] = useState([]);
  const [modal, setModal] = useState(false);
  const [editNewTask, setEditNewTask] = useState("");
  const [currentIndex, setCurrentIndex] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setToDo([...todo, item]);

    setItem("");
  };

  const handleDelete = (index) => setToDo(todo.filter((e, i) => i !== index));

  const editTask = (e) => {
    e.preventDefault();

    setModal(false);
    todo[currentIndex] = editNewTask;
    setEditNewTask("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          autoFocus
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">add task</button>
      </form>
      <ul className="list-container">
        <p className={todo.length === 0 ? "empty-list" : "not-empty-list"}>
          no todo found
        </p>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <div className="buttons">
              <button
                className="icon"
                title="Edit Task"
                onClick={() => {
                  setCurrentIndex(index);
                  setModal(true);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="icon"
                title="Remove Task"
                onClick={() => handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={editTask}>
        <div className={modal ? "modal" : "hidden-modal"}>
          <div className="modal-content">
            <h2>Edit Task</h2>
            <label>
              New Task
              <input
                type="text"
                value={editNewTask}
                onChange={(e) => setEditNewTask(e.target.value)}
              />
            </label>
            <button className="update-task-btn" type="submit">
              Update Task
            </button>
            <button className="cancel-edit-btn" onClick={() => setModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
