import React, { createContext, useReducer, useState } from "react";
import "./app.scss";
import TodoList from "./components/TodoList/TodoList";
import FilterItems from "./components/FilterItems/FilterItems";
import AddItemPanel from "./components/AddItemPanel/AddItemPanel";
import Header from "./components/Header/Header";
import { reducer } from "./hook/reducer";
import { useFilter } from "./hook/useFilter";

const data = [
  { text: "32423", isDone: false, id: 1 },
  { text: "sdfsdf", isDone: false, id: 2 },
  { text: "kkkkkkk", isDone: false, id: 3 },
];

export const TodosDispatch = createContext<any>(null);

function App() {
  const [todos, dispatch] = useReducer(reducer, data);
  const [filterTodos, onFilterSelect] = useFilter(todos);

  return (
    <TodosDispatch.Provider value={dispatch}>
      <div className="app">
        <Header />
        <div
          className="d-flex justify-content-end"
          style={{ marginBottom: 10 }}
        >
          <FilterItems onFilterSelect={onFilterSelect} />
        </div>
        <div className="wrapper">
          <TodoList todos={filterTodos} />
        </div>
        <AddItemPanel />
      </div>
    </TodosDispatch.Provider>
  );
}

export default App;
