import React, { useState } from "react";
import "./app.scss";
import TodoList from "./components/TodoList/TodoList";
import FilterItems from "./components/FilterItems/FilterItems";
import AddItemPanel from "./components/AddItemPanel/AddItemPanel";
import Header from "./components/Header/Header";

const data = [
  { text: "32423", isDone: false, id: 1 },
  { text: "sdfsdf", isDone: false, id: 2 },
  { text: "kkkkkkk", isDone: false, id: 3 },
];
function App() {
  const [todos, setTodos] = useState(() => data);
  const [filter, setFilter] = useState("all");

  const filterTodos = () => {
    if (filter === "isdone") {
      console.log("фильтрованный");
      return todos.filter((todo) => todo.isDone);
    }
    return todos;
  };

  const onFilterSelect = (filter: string) => {
      setFilter(filter);
  };

  const filteredTodos = filterTodos();

  const addTodoItem = (todoText: string) => {
    if (!todoText) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      { text: todoText, isDone: false, id: Date.now() },
    ]);
  };

  const deleteTodoItemWithIndex = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setIsDoneHandler = (id: number) => {
    const changedTodo = todos.find((todo) => todo.id === id);
    const changedTodoIndex = todos.findIndex((todo) => todo.id === id);
    changedTodo!.isDone = !changedTodo!.isDone;

    setTodos((prev) => {
      return [
        ...prev.slice(0, changedTodoIndex),
        changedTodo!,
        ...prev.slice(changedTodoIndex + 1),
      ];
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="d-flex justify-content-end" style={{ marginBottom: 10 }}>
        <FilterItems onFilterSelect={onFilterSelect} />
      </div>
      <div className="wrapper">
        <TodoList
          todos={filteredTodos}
          deleteTodoItemWithIndex={deleteTodoItemWithIndex}
          setIsDoneHandler={setIsDoneHandler}
        />
      </div>
      <AddItemPanel addTodoItem={addTodoItem} />
    </div>
  );
}

export default App;
