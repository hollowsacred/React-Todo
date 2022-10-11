import {useState} from 'react';

export const useFilter = (items: object[]) => {
  const [filter,setFilter] = useState('all')

  const filterTodos = (todos: any) => {
    if (filter === "isdone") {
      console.log("фильтрованный");
      return todos.filter((todo: any) => todo.isDone);
    }
    return todos;
  };

  const onFilterSelect = (fil: string) => {
      setFilter(fil);
  };
  return [filterTodos(items),onFilterSelect];
}

