import React, { useState } from "react";
import styles from "../Styles/Todo.module.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      const newItem = {
        id: Date.now(),
        title: text,
        image:
          "https://tse2.mm.bing.net/th?id=OIP.2DZi9rihdeyczK6N3KmGYgAAAA&pid=Api&P=0&h=180",
        status: false,
      };
      setTaskArray([...taskArray, newItem]);
      setText(""); // Clear the input field after adding a task
    }
  };

  const handleRemove = (id) => {
    const updateArray = taskArray.filter((task) => task.id !== id);
    setTaskArray(updateArray);
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <h1>Todo App</h1>
        <br />
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={handleInput}
          value={text}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {taskArray.length === 0 ? (
        <h1>No tasks added yet!</h1>
      ) : (
        <div id={styles.taskContainer}>
          <h2>Tasks</h2>
          <div className={styles.cardContainer}>
            {taskArray.map((task, index) => {
              return (
                <div key={task.id}>
                  <img src={task.image} alt={"logo"} />
                  <p>{task.title}</p>
                  <p>{task.status}</p>
                  <button onClick={() => handleRemove(task.id)}>Remove</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
