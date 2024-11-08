import { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      alert("Please enter a task.");
      return;
    }

    const isDuplicate = todos.some(
      (todo) => todo.name.toLowerCase() === text.toLowerCase()
    );

    if (isDuplicate) {
      alert("The name is already in use, please change the name.");
    } else {
      addTodo(text);
      setText("");
    }
  };

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          name: todo,
          isCompleted: false,
          date: {
            years: new Date().getFullYear(),
            time: new Date().getTime(),
          },
        },
      ];
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white", fontSize: "24px" }}>
        TodoList Naufal
      </h1>
      <FormTodo
        handleSubmit={handleSubmit}
        addTodo={addTodo}
        text={text}
        setText={setText}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      {todos.length <= 1 ? null : (
        <button style={{ marginTop: "12px" }} onClick={deleteAll}>
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoWrapper;
