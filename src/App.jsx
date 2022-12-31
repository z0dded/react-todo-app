import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [todo, setToDo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setToDo([...todo, item]);

    setItem("");
  };

  const handleDelete = (index) => setToDo(todo.filter((e, i) => i !== index));

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">add task</button>
      </form>
      <ul className="list-container">
        <p className={todo.length === 0 ? "red-title" : "blue-title"}>
          no todo found
        </p>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button className="icon-trash" onClick={() => handleDelete(index)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
